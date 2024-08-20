import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Index = (props) => {
    const { posts } = props;

    const handleDeletePost = (id) => {
        router.delete(`/posts/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>Blog Name</h1>
                <Link href="/posts/create">Create</Link>

                { posts.map((post) => (
                    <div key={post.id}>
                        <h2>
                            <Link href={`/posts/${post.id}`}>{ post.title }</Link>
                        </h2>
                        <p>{ post.body }</p>
                        
                        { post.tags.map((tag) => (
                            <p>{ tag.name }</p>
                        )) }
                        
                        <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeletePost(post.id)}>delete</button>
                    </div>
                )) }
                
            </div>
            
        </Authenticated>
        );
}

export default Index;