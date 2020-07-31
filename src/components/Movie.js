import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export class Movie extends Component{
    static propTypes ={
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string

    }

    render(){
        const {id, title, year, poster} = this.props

        return(
            <Link to={`/detail/${id}`} className="card">
                <div className='card-content'>
                    <div className="card-image">
                        <figure className="image">
                            <img src={poster} alt={title}/>
                        </figure>
                    </div>
                        <div className="media">
                            <div className="media-content">
                                <p className="titulo">{title}</p>
                                <p className="subtitulo">{year}</p>
                            </div>
                        </div>
                </div>
            </Link>
        )
    }
}