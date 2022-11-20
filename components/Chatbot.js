import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { useLocale } from '../locales/useLocale';
import { Container, Row, Col, Button } from 'reactstrap';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { ThemeProvider } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

const theme = {
    background: '#fafafa',
    headerBgColor: '#316ce8',
    headerFontColor: '#ffffff',
    headerFontSize: '16px',
    botBubbleColor: '#316ce8',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const bottomStyle = {
    background: '#316ce8',
    width: '86px',
    minWidth: '86px',
    height: '86x',
    zIndex: 1000,
    border: 'none',
};

const iconStyle = {
    color: '#fff',
};

export const Chatbot = () => {
    const [hidden, setHidden] = useState(true);
    const { t, locale } = useLocale();

    const toggleHidden = () => {
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };

    const handleEnd = ({ steps, values, locale }) => {
        console.log({ value: values[0] });
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '24px',
                left: '24px',
                zIndex: 999,
            }}
        >
            {hidden ? (
                <Button onClick={toggleHidden} style={bottomStyle}>
                    <MarkChatUnreadIcon sx={iconStyle} />
                </Button>
            ) : (
                <ThemeProvider theme={theme}>
                    <Button
                        onClick={toggleHidden}
                        style={{
                            position: 'absolute',
                            right: '4px',
                            top: '6px',
                            ...bottomStyle,
                        }}
                    >
                        <CloseIcon sx={iconStyle} />
                    </Button>
                    {locale === 'en' ? (
                        <ChatBot
                            headerTitle=""
                            recognitionEnable={true}
                            speechSynthesis={{ enable: true, lang: 'en' }}
                            handleEnd={handleEnd}
                            steps={[
                                {
                                    id: '1',
                                    message: 'Can I help you?',

                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    options: [
                                        {
                                            value: 1,
                                            label: 'I want AI on my behalf.',
                                            trigger: '4',
                                        },
                                        {
                                            value: 2,
                                            label:
                                                'I want AI to act on my behalf.',
                                            trigger: '3',
                                        },
                                        {
                                            value: 3,
                                            label:
                                                'I want to know about AI, Quantum Computers, Brain Tech, and other DeepTech.',
                                            trigger: '6',
                                        },
                                        {
                                            value: 4,
                                            label:
                                                'I want to have friends to share information about technology and business.',
                                            trigger: '7',
                                        },
                                        {
                                            value: 5,
                                            label:
                                                "I'd like to see more asynchronous and direct sharing of in-depth technical, marketing, and other knowledge in the field.",
                                            trigger: '5',
                                        },
                                    ],
                                },
                                {
                                    id: '3',
                                    message:
                                        'We recommend DeepAI.（Agency fee $39）',
                                    end: true,
                                },
                                {
                                    id: '4',
                                    message:
                                        'We recommend DeepAI.（Free user registration）',
                                    end: true,
                                },
                                {
                                    id: '5',
                                    message:
                                        'We recommend DeepCircle.（$9.9 per month）',
                                    end: true,
                                },
                                {
                                    id: '6',
                                    message: 'We recommend DeepLab（Free）',
                                    end: true,
                                },
                                {
                                    id: '7',
                                    message:
                                        'We recommend DeepNetwork.（Free & Special Benefits）',
                                    end: true,
                                },
                            ]}
                        />
                    ) : (
                        <ChatBot
                            headerTitle=""
                            recognitionEnable={true}
                            speechSynthesis={{ enable: true, lang: 'ja' }}
                            handleEnd={handleEnd}
                            steps={[
                                {
                                    id: '1',
                                    message: '何かお困りですか？',

                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    options: [
                                        {
                                            value: 1,
                                            label: 'AIを代行してほしい',
                                            trigger: '4',
                                        },
                                        {
                                            value: 2,
                                            label: 'AIを代行したい',
                                            trigger: '3',
                                        },
                                        {
                                            value: 3,
                                            label:
                                                'AI・量子コンピュータ・ブレインテックなどのDeepTechについて知りたい',
                                            trigger: '6',
                                        },
                                        {
                                            value: 4,
                                            label:
                                                '技術やビジネスについて情報共有できる仲間が欲しい',
                                            trigger: '7',
                                        },
                                        {
                                            value: 5,
                                            label:
                                                'もっと現場の深い技術やマーケティングなど知見を非同期で直接共有して欲しい',
                                            trigger: '5',
                                        },
                                    ],
                                },
                                {
                                    id: '3',
                                    message:
                                        'DeepAIがおすすめです（代行料金3,999円）',
                                    end: true,
                                },
                                {
                                    id: '4',
                                    message: 'DeepAIがおすすめです（登録無料）',
                                    end: true,
                                },
                                {
                                    id: '5',
                                    message:
                                        'DeepCircleがおすすめです（月額999円）',
                                    end: true,
                                },
                                {
                                    id: '6',
                                    message: 'DeepLabがおすすめです（無料）',
                                    end: true,
                                },
                                {
                                    id: '7',
                                    message:
                                        'DeepNetworkがおすすめです（無料&参加特典配布）',
                                    end: true,
                                },
                            ]}
                        />
                    )}
                </ThemeProvider>
            )}
        </div>
    );
};

export default Chatbot;
