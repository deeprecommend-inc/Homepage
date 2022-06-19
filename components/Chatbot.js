import React from 'react';
import ChatBot from 'react-simple-chatbot';

export const Chatbot = () => {
    const handleEnd = ({ steps, values }) => {
        alert(`Chat handleEnd callback! Number: ${values[0]}`);
    };

    return (
        <ChatBot
            headerTitle="チャットbot"
            recognitionEnable={true}
            handleEnd={handleEnd}
            steps={[
                {
                    id: '1',
                    message: 'What number I am thinking?',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 1, label: 'Number 1', trigger: '4' },
                        { value: 2, label: 'Number 2', trigger: '3' },
                        { value: 3, label: 'Number 3', trigger: '3' },
                    ],
                },
                {
                    id: '3',
                    message: 'Wrong answer, try again.',
                    trigger: '2',
                },
                {
                    id: '4',
                    message: 'https://deep-log.net',
                    end: true,
                },
            ]}
        />
    );
};

export default Chatbot;
