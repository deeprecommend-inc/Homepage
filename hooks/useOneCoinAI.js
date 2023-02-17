import Router from 'next/router';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import FeedbackIcon from '@mui/icons-material/Feedback';
import React from 'react';
import { oneCoinAI } from '../constants/const';
import stableDiffusionImg from '../assets/images/oneCoinAI/stableDiffusion.png';
import unstableIllusionImg from '../assets/images/oneCoinAI/unstableIllusion.png';
import deepDreamImg from '../assets/images/oneCoinAI/deepDream.png';
import { useLocale } from '../locales/useLocale';

export const useOneCoinAI = () => {
    const { t } = useLocale();
    const listOfOneCoinAI = [
        {
            href: oneCoinAI.stableDiffusion,
            imgSrc: stableDiffusionImg,
            title: t.index.oneCoinAI.stableDiffusion.title,
            description: t.index.oneCoinAI.stableDiffusion.description,
        },
        {
            href: oneCoinAI.unstableIllusion,
            imgSrc: unstableIllusionImg,
            title: t.index.oneCoinAI.unstableIllusion.title,
            description: t.index.oneCoinAI.unstableIllusion.description,
        },
        {
            href: oneCoinAI.deepDream,
            imgSrc: deepDreamImg,
            title: t.index.oneCoinAI.deepDream.title,
            description: t.index.oneCoinAI.deepDream.description,
        },
    ];
    return { listOfOneCoinAI };
};
