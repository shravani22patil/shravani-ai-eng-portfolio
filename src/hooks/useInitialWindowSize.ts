export default function useInitialWindowSize({ margin }: { margin?: number }) {
    const m = margin ?? 100;

    const winW = document.documentElement.clientWidth || window.innerWidth;
    const winH = document.documentElement.clientHeight || window.innerHeight;

    const initWidth = Math.max(0, winW - m);
    const initHeight = Math.max(0, winH - m);

    return { initWidth, initHeight };
}