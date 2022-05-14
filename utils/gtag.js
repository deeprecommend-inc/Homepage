import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GA_ID = 'G-3SGNXZF42T';

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== '';

// PVを測定する
export const pageview = (path) => {
    if (!existsGaId) {
        return;
    }

    window.gtag('config', GA_ID, {
        page_path: path,
    });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }) => {
    if (!existsGaId || typeof window === 'undefined') {
        return;
    }

    window?.gtag('event', action, {
        event_category: category,
        event_label: JSON.stringify(label),
        value,
    });
};
