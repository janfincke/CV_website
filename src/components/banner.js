'use strict';

const React = require('react');

const ResumePropTypes = require('../proptypes/resume');

const Banner = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: function () {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {this.props.basics.name}
                    </h1>
                    {/*
                     <h3>{this.props.basics.summary}</h3>
                     */}
                    <br/>
                    <hr/>
                    {/*<SocialMedia ulClass='social' profiles={this.props.basics.profiles}/>*/}
                </div>
            </div>
        );
    }
});

module.exports = Banner;