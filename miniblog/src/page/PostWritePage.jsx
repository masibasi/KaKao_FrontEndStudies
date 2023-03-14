import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../ui/TextInput";
import { PostListContext } from "../App";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
export const PostWritePage = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { addPost } = useContext(PostListContext);

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <Button
                    title="글 작성하기"
                    onClick={(e) => {
                        console.log({ title }, " ", { content });
                        addPost({ title: title, content: content });
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
};
