import React from 'react';
import Rainbow from '../../hoc/ranbow';

const About = () => {
    console.log(Rainbow);
    return (
        <div className='container'>
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae sollicitudin libero. In ullamcorper libero elit, id porttitor odio laoreet eu. Sed nec vulputate nisi. Quisque nulla magna, hendrerit in nisi non, consequat porta nunc. Nullam laoreet mi nunc, pretium faucibus lacus placerat ut. Praesent luctus enim luctus lacinia ultricies. Mauris commodo elit nec odio scelerisque vulputate. Fusce porta, felis eu pellentesque dignissim, ligula lectus sagittis magna, eu tempus justo nisl ac velit. In nunc massa, imperdiet sed feugiat non, dapibus non ligula.</p>

        </div>
    );
}

export default Rainbow(About);