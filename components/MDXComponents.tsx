/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';
import { Tabs, Tab } from './Tabs';
import Code from './Code';
import Note from './Note';
import PostRequest from './PostRequest';
import Response from './Response';
import Codesandbox from './Codesandbox';
import ScrollCode from './ScrollCode'

const CodeCustom = (props: any) => <Code>{props.children}</Code>;

const NoteCustom = (props: any) => <Note type="success">{props.children}</Note>;

const TableCustom = (props: any) => (
    <div className="table-wrapper">
        <table>{props.children}</table>
    </div>
);

const MDXComponents = {
    Response,
    PostRequest,
    Note,
    Image,
    blockquote: NoteCustom,
    code: CodeCustom,
    table: TableCustom,
    Code,
    Tab,
    Tabs,
    ScrollCode,
    Codesandbox
};

export default MDXComponents;
