import React, { useEffect, useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../blog/Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useLocale } from '../../locales/useLocale';
import { NextSeo } from 'next-seo';
import { site } from '../../constants/const';
import Adsense from '../../components/Adsense';
import MainFeaturedPost from '../blog/MainFeaturedPost';
import Main from '../blog/Main';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Box } from '@mui/system';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

const theme = createTheme();

const Sugimoto = () => {
    const [ready, setReady] = useState();
    const router = useRouter();
    const { t, locale } = useLocale();

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <div
            style={{
                maxWidth: '750px',
                margin: '64px auto',
                whiteSpace: 'normal',
                padding: '0 24px',
            }}
        >
            <h1 style={{ margin: '35px 0 30px' }}>
                {t.teams.sugimoto.JinSugimoto.title}
            </h1>
            <span
                dangerouslySetInnerHTML={{
                    __html: t.teams.sugimoto.JinSugimoto.content,
                }}
            />
            <span
                dangerouslySetInnerHTML={{
                    __html: t.teams.sugimoto.JinSugimoto.history,
                }}
            />
            {/* <h1 style={{ margin: '35px 0 30px' }}>
                {t.teams.general.upbringing}
            </h1>
            
            <h1 style={{ margin: '35px 0 30px' }}>{t.teams.general.routine}</h1>
            <span
                dangerouslySetInnerHTML={{
                    __html: t.teams.sugimoto.JinSugimoto.routine,
                }}
            /> */}
            {/* <h1 style={{ margin: '35px 0 30px' }}>Big 5</h1>
            <Radar
                options={{
                    scales: {
                        r: {
                            min: 0,
                            max: 10,
                            stepSize: 1,
                        },
                    },
                }}
                data={{
                    labels: [
                        t.teams.general.big5.opennessToExperience,
                        t.teams.general.big5.conscientiousness,
                        t.teams.general.big5.extraversion,
                        t.teams.general.big5.agreeableness,
                        t.teams.general.big5.neuroticism,
                    ],
                    datasets: [
                        {
                            label: t.teams.sugimoto.JinSugimoto.title,
                            data: [10, 8, 7, 4, 9],
                            backgroundColor: 'rgba(1, 100, 211, 0.5)',
                            borderColor: '#0164d3',
                            borderWidth: 1,
                        },
                        {
                            label: '平均',
                            data: [6, 6, 6, 8, 6],
                            backgroundColor: 'rgba(136, 136, 136, 0.5)',
                            borderColor: '#888888',
                            borderWidth: 1,
                        },
                    ],
                }}
            />
            <h1 style={{ margin: '35px 0 30px' }}>EQ</h1>
            <Radar
                options={{
                    scales: {
                        r: {
                            min: 0,
                            max: 10,
                            stepSize: 1,
                        },
                    },
                }}
                data={{
                    labels: t.teams.general.eq,
                    datasets: [
                        {
                            label: t.teams.sugimoto.JinSugimoto.title,
                            data: [10, 10, 6, 10, 7, 10, 10, 5, 10, 10, 5, 4],
                            backgroundColor: 'rgba(1, 100, 211, 0.5)',
                            borderColor: '#0164d3',
                            borderWidth: 1,
                        },
                    ],
                }}
            />
            <h1 style={{ margin: '35px 0 30px' }}>16Personalities</h1>
            INTP-A
            <img src="/intp.png" />
            or ENTJ-A
            <img src="/entj.png" />
            <h1 style={{ margin: '35px 0 30px' }}>
                {t.teams.general.strength}
            </h1>
            <ul>
                {t.teams.sugimoto.JinSugimoto.strengths.map(strength => {
                    return <li key={strength}>{strength}</li>;
                })}
            </ul>
            <h1 style={{ margin: '35px 0 30px' }}>
                {t.teams.general.weakness}
            </h1>
            <ul>
                {t.teams.sugimoto.JinSugimoto.weaknesses.map(weakness => {
                    return <li key={weakness}>{weakness}</li>;
                })}
            </ul>
            <h1 style={{ margin: '35px 0 30px' }}>
                {t.teams.general.cognitiveCharacteristics.title}
            </h1>
            <Radar
                options={{
                    scales: {
                        r: {
                            min: 1,
                            max: 3,
                            stepSize: 1,
                        },
                    },
                }}
                data={{
                    labels: [
                        t.teams.general.cognitiveCharacteristics.vision
                            .cameraEye,
                        t.teams.general.cognitiveCharacteristics.vision
                            .threeDimensionalVision,
                        t.teams.general.cognitiveCharacteristics.lang.fantasy,
                        t.teams.general.cognitiveCharacteristics.lang
                            .dictionary,
                        t.teams.general.cognitiveCharacteristics.auditory.radio,
                        t.teams.general.cognitiveCharacteristics.auditory.sound,
                    ],
                    datasets: [
                        {
                            label: t.teams.sugimoto.JinSugimoto.title,
                            data: [2, 3, 2, 3, 1, 2],
                            backgroundColor: 'rgba(1, 100, 211, 0.5)',
                            borderColor: '#0164d3',
                            borderWidth: 1,
                        },
                    ],
                }}
            />
            <Radar
                options={{
                    scales: {
                        r: {
                            min: 1,
                            max: 3,
                            stepSize: 1,
                        },
                    },
                }}
                data={{
                    labels: [
                        t.teams.general.multipleIntelligences.visualSpatial,
                        t.teams.general.multipleIntelligences
                            .linguisticVerbalIntelligence,
                        t.teams.general.multipleIntelligences
                            .logicalMathematical,
                        t.teams.general.multipleIntelligences.bodilyKinesthetic,
                        t.teams.general.multipleIntelligences.musical,
                        t.teams.general.multipleIntelligences.interpersonal,
                        t.teams.general.multipleIntelligences.intrapersonal,
                        t.teams.general.multipleIntelligences.naturalistic,
                    ],
                    datasets: [
                        {
                            label: t.teams.sugimoto.JinSugimoto.title,
                            data: [3, 2, 3, 3, 2, 1, 3, 2],
                            backgroundColor: 'rgba(1, 100, 211, 0.5)',
                            borderColor: '#0164d3',
                            borderWidth: 1,
                        },
                    ],
                }}
            /> */}
        </div>
    );
};

export default Sugimoto;
