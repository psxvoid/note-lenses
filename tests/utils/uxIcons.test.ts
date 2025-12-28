import { describe, it, expect } from 'vitest';
import { normalizeUXIconMapRecord, resolveUXIcon } from '../../src/utils/uxIcons';

describe('resolveUXIcon', () => {
    it('returns defaults when no overrides are present', () => {
        expect(resolveUXIcon(undefined, 'list-search')).toBe('search');
        expect(resolveUXIcon(undefined, 'nav-tag')).toBe('tags');
    });

    it('deserializes Iconize formatted overrides', () => {
        expect(resolveUXIcon({ 'list-search': 'LiStar' }, 'list-search')).toBe('star');
    });
});

describe('normalizeUXIconMapRecord', () => {
    it('stores overrides in Iconize format and drops unknown keys', () => {
        const normalized = normalizeUXIconMapRecord({
            'list-search': 'star',
            'not-a-real-key': 'LiHome'
        });

        expect(Object.keys(normalized)).toEqual(['list-search']);
        expect(normalized['list-search']).toBe('LiStar');
    });

    it('drops values that resolve to the default icon', () => {
        const normalized = normalizeUXIconMapRecord({
            'list-search': 'LiSearch'
        });

        expect(normalized['list-search']).toBeUndefined();
    });

    it('preserves emoji overrides', () => {
        const normalized = normalizeUXIconMapRecord({
            'folder-closed': '📁'
        });

        expect(normalized['nav-folder-closed']).toBe('📁');
    });
});
