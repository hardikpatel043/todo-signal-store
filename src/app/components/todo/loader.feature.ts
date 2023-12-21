import { signalStoreFeature, withComputed, withState } from "@ngrx/signals";

import { computed } from "@angular/core";

export type loaderState = 'init' | 'loading' | 'loaded' | { error: string; };

export function withLoaderState() {
    return signalStoreFeature(
        withState<{ state: loaderState; }>({
            state: 'init'
        }),
        withComputed(({ state }) => ({
            loading: computed(() => state() === 'loading'),
            loaded: computed(() => state() === 'loaded'),
            error: computed(() => {
                const s = state();
                return typeof s === "object" ? s.error : null;
            })
        }))
    );
}

export function setLoading(): { state: loaderState; } {
    return { state: 'loading' };
}

export function setLoaded(): { state: loaderState; } {
    return { state: 'loaded' };
}

export function setError(error: string): { state: loaderState; } {
    return { state: { error } };
}
