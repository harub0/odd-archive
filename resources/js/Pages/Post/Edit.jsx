import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {post, tags} = props;
    const {data, setData, put} = useForm({
        title: post.title,
        body: post.body,
        tags: post.tags.map(tag => tag.id)
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    const handleTagChange = (e) => {
        const tagId = parseInt(e.target.value);
        const newTags = [...data.tags];
        if (e.target.checked) {
            // タグがチェックされた場合
            setData("tags", [...newTags, tagId]);
        } else {
            // タグのチェックが外された場合
            setData("tags", newTags.filter((id) => id !== tagId));
        }
    };

    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>Title</h2>
                        <input type="text" placeholder="タイトル" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2>Body</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <div>
                        <h2>Tags</h2>
                        {tags.map((tag) => (
                            <label key={tag.id}>
                                <input type="checkbox" value={tag.id} onChange={handleTagChange} checked={data.tags.includes(tag.id)}/>
                                {tag.name}
                            </label>
                        ))}
                    </div>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/posts">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
