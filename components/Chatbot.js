import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { useLocale } from '../locales/useLocale';
import { Container, Row, Col, Button } from 'reactstrap';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { ThemeProvider } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { useRouter } from 'next/router';
import { site } from '../constants/const';

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
    // TODO: 知りたい欲望にDiscord・LINE・メルマガの３つの選択肢を与える
    const [hidden, setHidden] = useState(true);
    const { t, locale } = useLocale();
    const router = useRouter();

    const handleEnd = ({ steps, values, locale }) => {
        console.log({ value: values[0] });
        switch (values[0]) {
            case 1:
                router.push('thinking');
                break;
            case 2:
                router.push('thinking');
                break;
            case 3:
                windowOpen(site.deepLab);
                break;
            case 4:
                windowOpen(site.discord);
                break;
            case 5:
                router.push('magazine');
                break;
            default:
                break;
        }
    };

    const windowOpen = url => {
        window.open(url, '_blank', 'noreferrer');
    };

    const toggleHidden = () => {
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
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
                                            label: 'I want creator tools.',
                                            trigger: '4',
                                        },
                                        // {
                                        //     value: 2,
                                        //     label:
                                        //         'I want AI to act on my behalf.',
                                        //     trigger: '3',
                                        // },
                                        {
                                            value: 5,
                                            label:
                                                'I want to know about AI, quantum computing, brain machines, and other DeepTech.',
                                            trigger: '5',
                                        },
                                        // {
                                        //     value: 3,
                                        //     label:
                                        //         'I want to read DeepTech articles.',
                                        //     trigger: '6',
                                        // },
                                        // {
                                        //     value: 4,
                                        //     label:
                                        //         'I want to join the DeepTech community.',
                                        //     trigger: '7',
                                        // },
                                    ],
                                },
                                {
                                    id: '3',
                                    message: 'We recommend Deepia.',
                                    end: true,
                                },
                                {
                                    id: '4',
                                    message: 'We recommend Deepia.',
                                    end: true,
                                },
                                {
                                    id: '5',
                                    message: 'We recommend DeepMagazine.',
                                    end: true,
                                },
                                {
                                    id: '6',
                                    message: 'We recommend DeepLab.',
                                    end: true,
                                },
                                {
                                    id: '7',
                                    message: 'We recommend DeepNetwork.',
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
                                            label:
                                                'クリエイター向け便利ツールが欲しい',
                                            trigger: '4',
                                        },
                                        // {
                                        //     value: 2,
                                        //     label: 'AIを代行したい',
                                        //     trigger: '3',
                                        // },
                                        {
                                            value: 5,
                                            label:
                                                'AI・量子コンピューティング・ブレインマシンなどのDeepTechについて知りたい',
                                            trigger: '5',
                                        },
                                        // {
                                        //     value: 3,
                                        //     label: 'DeepTechの記事を読みたい',
                                        //     trigger: '6',
                                        // },
                                        // {
                                        //     value: 4,
                                        //     label:
                                        //         'DeepTechのコミュニティーに参加したい',
                                        //     trigger: '7',
                                        // },
                                    ],
                                },
                                {
                                    id: '3',
                                    message: 'Deepiaがおすすめです',
                                    end: true,
                                },
                                {
                                    id: '4',
                                    message: 'Deepiaがおすすめです',
                                    end: true,
                                },
                                {
                                    id: '5',
                                    message: 'DeepMagazineがおすすめです',
                                    end: true,
                                },
                                {
                                    id: '6',
                                    message: 'DeepLabがおすすめです',
                                    end: true,
                                },
                                {
                                    id: '7',
                                    message: 'DeepNetworkがおすすめです',
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
