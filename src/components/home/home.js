import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../../images/pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        posts: []
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             });
    //         });
    // }


    render() {
        const { posts } = this.props;

        const postList = posts.length ? (posts.map(post => {
            return (
                <Link to={'/' + post.id} key={post.id}>
                    <div className="post card" key={post.id} >
                        <img src={Pokeball} alt=" A Pokeball" />
                        <div className="card-content">
                            <span className="card-title red-text">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </Link>
            )
        })) : (
                <div className="center">
                    No posts yet
                </div>
            )
        return (
            <div className='container home'>
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae sollicitudin libero. In ullamcorper libero elit, id porttitor odio laoreet eu. Sed nec vulputate nisi. Quisque nulla magna, hendrerit in nisi non, consequat porta nunc. Nullam laoreet mi nunc, pretium faucibus lacus placerat ut. Praesent luctus enim luctus lacinia ultricies. Mauris commodo elit nec odio scelerisque vulputate. Fusce porta, felis eu pellentesque dignissim, ligula lectus sagittis magna, eu tempus justo nisl ac velit. In nunc massa, imperdiet sed feugiat non, dapibus non ligula.</p>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);