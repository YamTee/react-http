import { React, Component } from "react";
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);

                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const posts = this.state.posts;

        return (
            <div>
                <h1>List of posts:</h1>

                <ul>
                    {
                        posts.length
                            ? posts.map(x => <li key={x.id}>{x.title}</li>)
                            : null
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;