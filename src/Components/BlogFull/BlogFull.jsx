import React from "react";

const FullPostList = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
`
const Post = styled.div`
    display: flex;
    border: 3px solid #141414;
    border-radius: 5px;
    width: 70%;
`

const BlogFull = () => {
    return(
        <FullPostList>
            <Post>
                <h2>Тайтл</h2>
                <span>
                    Автор поста
                </span>
                <h3>
                    Короткий текст поста
                </h3>
            </Post>
        </FullPostList>
    )
}