// src/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css'; // Create this file for styles

const Home = () => {
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(15);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setComments(data);
        };

        fetchComments();
    }, []);

    const filteredComments = comments.filter(comment =>
        comment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const uniquePostIds = [...new Set(comments.map(comment => comment.postId))].length;

    // Pagination logic
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);
    
    const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

    return (
        <div>
            <h2>Comments</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Total Comments</h3>
                    <p>{comments.length}</p>
                </div>
                <div className="card">
                    <h3>Unique Post ID Count</h3>
                    <p>{uniquePostIds}</p>
                </div>
            </div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {currentComments.map(comment => (
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
