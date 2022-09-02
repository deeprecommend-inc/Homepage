import ng from '../assets/images/tech/web/ng.png';
import aws from '../assets/images/tech/web/aws.png';
import ts from '../assets/images/tech/web/ts.png';
import python from '../assets/images/tech/web/python.png';
import react from '../assets/images/tech/web/react.png';
import github from '../assets/images/tech/web/github.jpg';
import flutter from '../assets/images/tech/web/flutter.jpg';
import electron from '../assets/images/tech/web/electron.png';
import docker from '../assets/images/tech/web/docker.png';
import django from '../assets/images/tech/web/django.png';
import nginx from '../assets/images/tech/web/nginx.png';
import next from '../assets/images/tech/web/next.png';
import nest from '../assets/images/tech/web/nest.png';
import mysql from '../assets/images/tech/web/mysql.jpg';
import postgres from '../assets/images/tech/web/postgres.png';
import mongo from '../assets/images/tech/web/mongo.png';
import htmlCss from '../assets/images/tech/web/htmlCss.png';
import terraform from '../assets/images/tech/web/terraform.png';
import sassTailwind from '../assets/images/tech/web/sassTailwind.png';
import anaconda from '../assets/images/tech/ai/anaconda.png';
import cuda from '../assets/images/tech/ai/cuda.png';
import cudnn from '../assets/images/tech/ai/cudnn.png';
import jupyter from '../assets/images/tech/ai/jupyter.png';
import keras from '../assets/images/tech/ai/keras.png';
import matplotlib from '../assets/images/tech/ai/matplotlib.png';
import numpy from '../assets/images/tech/ai/numpy.png';
import flickr from '../assets/images/tech/ai/flickr.png';
import pillow from '../assets/images/tech/ai/pillow.png';
import selenuim from '../assets/images/tech/ai/selenium.png';
import sklearn from '../assets/images/tech/ai/sklearn.png';
import tensorflow from '../assets/images/tech/ai/tensorflow.png';
import sympy from '../assets/images/tech/ai/sympy.png';
import qiskit from '../assets/images/tech/quantum/qiskit.png';
import blueqat from '../assets/images/tech/quantum/blueqat.jpg';

export const site = {
    home: 'https://deep-recommend.com',
    deepLog: 'https://deep-log.net',
    deepMusic:
        'https://www.youtube.com/watch?v=LbCOZG1bKag&list=PLl1uSafEFyQk6_gbYvwFttY80szd-eKEZ',
    deepMuseum: 'https://deep-recommend.com',
    deepMatching: 'https://deep-matching.com',
    community: 'https://discord.gg/QjSFUCzDn5',
    ec: 'http://deeprecommed.official.ec',
    twitter: 'https://twitter.com/DeepRecommend',
    youtube: 'https://www.youtube.com/channel/UCwGTL90Osb8lItwP3zFfQ2Q',
    instagram: 'https://www.instagram.com/deep_recommend/',
    tiktok: 'https://www.tiktok.com/@deeprecommend',
    github: 'https://github.com/deep-recommend',
    facebook: 'https://www.facebook.com/recommend.deep/',
    slack:
        'https://join.slack.com/t/deeprecommend-mc58389/shared_invite/zt-wdn6aoli-x56SQa1Vfc97CEFvxcpmBw',
    discord: 'https://discord.gg/QjSFUCzDn5',
    pressRelease: 'https://prtimes.jp/main/html/searchrlp/company_id/92063',
    medium: 'https://medium.com/@deeprecommend',
    qiita: 'https://qiita.com/DeepRecommend/',
    zenn: 'https://zenn.dev/deeprecommend',
    deepconnectBanner: 'https://deepconnect.my.canva.site/',
};

export const sugimoto = {
    twitter: 'https://twitter.com/DeepRecommend',
    instagram: 'https://www.instagram.com/deep_recommend/',
};

export const smtp = {
    username: 'deeprecommend@gmail.com',
    password: '1B6B42B792EB04D97D0D4828ABB1209989B1',
    servername: 'smtp.elasticemail.com',
    port: '2525',
};

export const imgUrl = {
    deeprecommend:
        'https://deep-log.s3.ap-northeast-1.amazonaws.com/DeepRecommend+(1).png',
    deeplab: 'https://deep-log.s3.ap-northeast-1.amazonaws.com/DeepLab+(1).png',
};

const docs = {
    ts: 'https://www.typescriptlang.org/',
    py: 'https://www.python.org/',
    mdn: 'https://developer.mozilla.org/',
    sass: 'https://sass-lang.com/',
    tailwind: 'https://tailwindcss.com/',
    ng: 'https://angular.io/',
    ngMaterial: 'https://material.angular.io/',
    react: 'https://reactjs.org/',
    mui: 'https://mui.com/',
    next: 'https://nextjs-ja-translation-docs.vercel.app/',
    nest: 'https://nestjs.com/',
    django: 'https://www.django-rest-framework.org/',
    mysql: 'https://www.mysql.com/',
    postgres: 'https://www.postgresql.org/',
    mongo: 'https://www.mongodb.com/',
    nginx: 'https://www.nginx.com/',
    aws: 'https://aws.amazon.com/',
    terraform: 'https://www.terraform.io/',
    electron: 'https://www.electronjs.org/',
    github: 'https://github.com/',
    flutter: 'https://flutter.dev/',
    docker: 'https://www.docker.com/',
    tensorflow: 'https://www.tensorflow.org/',
    anaconda: 'https://www.anaconda.com/',
    cuda: 'https://developer.nvidia.com/cuda-toolkit',
    cudnn: 'https://developer.nvidia.com/cudnn',
    jupyter: 'https://jupyter.org/',
    sklearn: 'https://scikit-learn.org/',
    keras: 'https://keras.io/',
    numpy: 'https://numpy.org/',
    sympy: 'https://www.sympy.org/',
    matplotlib: 'https://matplotlib.org/',
    pillow: 'https://pillow.readthedocs.io/',
    flickr: 'https://www.flickr.com/',
    selenuim: 'https://www.selenium.dev/',
    qiskit: 'https://qiskit.org/',
    blueqat: 'https://blueqat.com/',
    tensorflowQuantum: 'https://www.tensorflow.org/quantum',

    // unused
    socket: 'https://socket.io/',
    opencv: 'https://opencv.org/',
    ibmq: 'https://quantum-computing.ibm.com/',
    silq: 'https://silq.ethz.ch/',
};

export const sections = [
    { title: 'Web', url: '/lab/web' },
    { title: 'AI', url: '/lab/ai' },
    { title: 'Quantum', url: '/lab/quantum' },
    { title: 'Brain', url: '/lab/brain' },
];

export const techUsed = {
    web: [
        {
            img: ts,
            name: 'TypeScript',
            url: docs.ts,
        },
        {
            img: python,
            name: 'Python',
            url: docs.py,
        },
        {
            img: htmlCss,
            name: 'HTML/CSS',
            url: docs.mdn,
        },
        {
            img: sassTailwind,
            name: 'Sass/Tailwind',
            url: docs.sass,
        },
        {
            img: ng,
            name: 'Angular',
            url: docs.ng,
        },
        {
            img: react,
            name: 'React',
            url: docs.react,
        },
        {
            img: next,
            name: 'Next.js',
            url: docs.next,
        },
        {
            img: nest,
            name: 'NestJS',
            url: docs.nest,
        },
        {
            img: django,
            name: 'Django',
            url: docs.django,
        },
        {
            img: mysql,
            name: 'MySQL',
            url: docs.mysql,
        },
        {
            img: postgres,
            name: 'PostgreSQL',
            url: docs.postgres,
        },
        {
            img: mongo,
            name: 'MongoDB',
            url: docs.mongo,
        },
        {
            img: nginx,
            name: 'Nginx',
            url: docs.nginx,
        },
        {
            img: aws,
            name: 'AWS',
            url: docs.aws,
        },
        {
            img: terraform,
            name: 'Terraform',
            url: docs.terraform,
        },
        {
            img: electron,
            name: 'Electron',
            url: docs.electron,
        },
        {
            img: github,
            name: 'GitHub',
            url: docs.github,
        },
        {
            img: flutter,
            name: 'Flutter',
            url: docs.flutter,
        },
        {
            img: docker,
            name: 'Docker',
            url: docs.docker,
        },
    ],
    ai: [
        {
            img: python,
            name: 'Python',
            url: docs.py,
        },
        {
            img: django,
            name: 'Django',
            url: docs.django,
        },
        {
            img: tensorflow,
            name: 'TensorFlow',
            url: docs.tensorflow,
        },
        {
            img: anaconda,
            name: 'Anaconda',
            url: docs.anaconda,
        },
        {
            img: cuda,
            name: 'CUDA',
            url: docs.cuda,
        },
        {
            img: cudnn,
            name: 'cuDNN',
            url: docs.cudnn,
        },
        {
            img: jupyter,
            name: 'Jupyter Notebook',
            url: docs.jupyter,
        },
        {
            img: sklearn,
            name: 'scikit-learn',
            url: docs.sklearn,
        },
        {
            img: keras,
            name: 'Keras',
            url: docs.keras,
        },
        {
            img: numpy,
            name: 'Numpy',
            url: docs.numpy,
        },
        {
            img: sympy,
            name: 'Sympy',
            url: docs.sympy,
        },
        {
            img: matplotlib,
            name: 'Matplotlib',
            url: docs.matplotlib,
        },
        {
            img: pillow,
            name: 'Pillow',
            url: docs.pillow,
        },
        {
            img: flickr,
            name: 'Flickr',
            url: docs.flickr,
        },
        {
            img: selenuim,
            name: 'Selenium',
            url: docs.selenuim,
        },
    ],
    quantum: [
        {
            img: python,
            name: 'Python',
            url: docs.py,
        },
        {
            img: tensorflow,
            name: 'TensorFlow Quantum',
            url: docs.tensorflowQuantum,
        },
        {
            img: qiskit,
            name: 'Qiskit',
            url: docs.qiskit,
        },
        {
            img: blueqat,
            name: 'Bluqat',
            url: docs.blueqat,
        },
    ],
};
