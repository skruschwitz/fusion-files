import React from 'react'
import PropTypes from 'prop-types';

const BasicLayout = (props) => {
  const [promo, header, main, aside, footer] = props.children;
  return (
    <div className="container">
      <div className="row">
        <header className='col-lg-12'>
          {promo}
        </header>
        <header className='col-lg-12'>
          {header}
        </header>
        <main className='col-lg-8'>
          {main}
        </main>
        <aside className='col-lg-4'>
          {aside}
        </aside>
        <footer className='col-lg-12'>
          {footer}
          <p>Copyright &copy; 2020</p>
        </footer>
      </div>
    </div>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.node
}

BasicLayout.sections = ['promo','header', 'main', 'aside', 'footer']

export default BasicLayout


// export default [
//   {
//     id: 'promo',
//     cssClass: 'col-xs-12',
//     element: 'promo'
//   },
//   {
//     id: 'header',
//     cssClass: 'col-xs-12 fixed-on-small',
//     element: 'header'
//   },
//   {
//     id: 'main',
//     cssClass: 'col-xs-12 col-md-9',
//     element: 'article'
//   },
//   {
//     id: 'sidebar',
//     cssClass: 'col-xs-12 col-md-3',
//     element: 'aside'
//   },
//   {
//     id: 'footer',
//     cssClass: 'col-xs-12',
//     element: 'footer'
//   },
// ]
