import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { posts } = props;

    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>Blog Name</h1>

                { posts.map((post) => (
                    <div key={post.id}>
                        <h2>{ post.title }</h2>
                        <p>{ post.body }</p>
                    </div>
                )) }
            </div>
            
        </Authenticated>
        );
}

export default Index;