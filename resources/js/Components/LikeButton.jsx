import React from 'react';
import { useForm } from '@inertiajs/react';

const LikeButton = (props) => {
    const { post } = props;
    const { data, setData, post: submitPost } = useForm({
        likes_count: post.likes_count
    });

    const handleLike = () => {
        submitPost(`/posts/${post.id}/like`, {
            onSuccess: (response) => {
                // 成功時に新しいいいね数を設定
                setData('likes_count', response.likes_count);
            }
        });
    };

    return (
        <div>
            <button  onClick={handleLike}>
                {post.liked_by_users.length} いいね
            </button>
        </div>
    );
};

export default LikeButton;