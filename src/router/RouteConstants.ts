export const RE_DIGIT = new RegExp(/^\d+$/)

/**
 * This module contains route constants that define the paths for different pages in the application.
 * These constants are designed to provide flexibility, allowing their values to be modified dynamically.
 */
export const AllRouteConstants = {
  landingPage: {
    index: '/',
    home: '/',
    contactUs: '/contact-us',
    aboutUs: '/about-us'
  },
  auth: {
    index: '/auth',
    login: '/auth/signin',
    signup: '/auth/signup',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password'
  },
  admin: {
    index: '/stu-admin',
    auth: {
      index: '/stu-admin/auth',
      login: '/stu-admin/auth/login',
      register: '/stu-admin/auth/register'
    },
    users: {
      index: '/stu-admin/users'
    },
    apartments: {
      index: '/stu-admin/apartments'
    },
    addresses: {
      index: '/stu-admin/addresses'
    }
  },
  main: {
    index: '/main',
    apartment: {
      singleApartment: '/main/apartments/:id'
    },
    owner: {
      singleOwner: '/main/owner/:id',
      singleOwnerProperties: ''
    }
  }
}
