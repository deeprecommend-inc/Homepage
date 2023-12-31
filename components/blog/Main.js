import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import * as marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useDispatch } from 'react-redux';
import { blogDetailSlice } from '../../store/blogDetail';
import * as katex from 'katex';
import 'katex/dist/katex.css';

function Main(props) {
    const { detail, title } = props;
    const [ready, setReady] = useState(false);
    const [contentHtml, setContentHtml] = useState('');
    const [speakingInfo, setSpeakingInfo] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setReady(true);
        parse();
        genToc();
        setInitSpeakingInfo();
    }, []);

    const parse = () => {
        const renderer = new marked.Renderer();

        // function mathsExpression(expr) {
        //     if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
        //         expr = expr.substr(2, expr.length - 4);
        //         return katex.renderToString(expr, { displayMode: true });
        //     } else if (expr.match(/^\$[\s\S]*\$$/)) {
        //         expr = expr.substr(1, expr.length - 2);
        //         return katex.renderToString(expr, { isplayMode: false });
        //     }
        // }

        // const rendererCode = renderer.code;
        // renderer.code = function(code, lang, escaped) {
        //     if (!lang) {
        //         const math = mathsExpression(code);
        //         if (math) {
        //             return math;
        //         }
        //     }

        //     return rendererCode(code, lang, escaped);
        // };

        // const rendererCodespan = renderer.codespan;
        // renderer.codespan = function(text) {
        //     const math = mathsExpression(text);

        //     if (math) {
        //         return math;
        //     }

        //     return rendererCodespan(text);
        // };

        marked.setOptions({
            renderer: renderer,
            highlight: (code, lang) => {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
            pedantic: false,
            gfm: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false,
        });

        const parsed = marked.parse(detail);

        setContentHtml(parsed);
    };

    const genToc = () => {
        const toc = [];
        const renderer = new marked.Renderer();
        renderer.heading = (text, level) => {
            const slug = encodeURI(text.toLowerCase());
            toc.push({
                level: level,
                slug: slug,
                title: text,
            });
            return (
                '<h' +
                level +
                ' id="' +
                slug +
                '">' +
                text +
                '</h' +
                level +
                '>\n'
            );
        };
        marked.setOptions({ renderer: renderer });
        marked.parse(detail);
        dispatch(blogDetailSlice.actions.setToc(toc));
    };

    const setInitSpeakingInfo = () => {
        const speak = new SpeechSynthesisUtterance();
        speak.text = contentHtml;
        speak.lang = 'en-US';
        setSpeakingInfo(speak);
    };

    if (!ready) return <></>;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
                background: '#ffffff',
                borderRadius: '20px',
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            <div
                dangerouslySetInnerHTML={{
                    __html: contentHtml,
                }}
            />
            <style src="highlightjs/styles/github-gist.css"></style>
        </Grid>
    );
}

export default Main;
