import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@cv/eds-react/lib/components';

class TreeElement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  element = () => {
    if (this.props.element.children && this.props.element.children.length > 0) {
      const classes = ['title', 'item'];

      if (this.state.open) {
        classes.push('opened');
      }

      if (this.props.location && this.props.location.pathname.startsWith(this.props.element.uri)) {
        classes.push('active');
      }

      return [
        (
          <span key="0" className={classes.join(' ')} onClick={this.toggle}>
            <Icon style={{position: 'relative', bottom: 2}} className={this.props.element.icon} />
            { this.props.element.title }
          </span>
        ),
        (
          <ul key="1">
            {this.props.element.children.map(
              (element, index) => <TreeElement key={index} element={element} />
            )}
          </ul>
        )
      ];
    } else {
      return (
        <NavLink to={this.props.element.uri} className="item">
          <Icon style={{position: 'relative', bottom: 2}} className={this.props.element.icon} />
          { this.props.element.title }
        </NavLink>
      );
    }
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
        <li>
          { this.element() }
        </li>
    );
  }

}

export default TreeElement;
