import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/comment/head'
import Bottom from '@/components/comment/bottom'
import First from '@/components/first'
import Inside from '@/components/inside'
import Index from '@/components/index.vue'

import SchoolNotice from '@/components/dynamic/school-notice'
import PhotoNews from '@/components/dynamic/photo-news'
import LatestInformation from '@/components/dynamic/latest-information'


import ContactUs from '@/components/contact/contact-us'



Vue.use(Router)
Vue.component('my-head', Head)
Vue.component('my-bottom', Bottom)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/First',
        name: 'First',
        component: First
    }, {
        path: '/Head',
        name: 'Head',
        component: Head
    }, {
        path: '/Bottom',
        name: 'Bottom',
        component: Bottom
    }, {
        path: '/Inside',
        name: 'Inside',
        component: Inside
    }, {
        path: '/SchoolNotice',
        name: 'SchoolNotice',
        component: SchoolNotice
    }, {
        path: '/PhotoNews',
        name: 'PhotoNews',
        component: PhotoNews
    }, {
        path: '/LatestInformation',
        name: 'LatestInformation',
        component: LatestInformation
    }, {
        path: '/SchoolProfile',
        name: 'SchoolProfile',
        component: SchoolProfile
    }, {
        path: '/History',
        name: 'History',
        component: History
    }, {
        path: '/Teacher',
        name: 'Teacher',
        component: Teacher
    }, {
        path: '/GiftedPerson',
        name: 'GiftedPerson',
        component: GiftedPerson
    }, {
        path: '/BeautifulSchool',
        name: 'BeautifulSchool',
        component: BeautifulSchool
    }, {
        path: '/LatestInformation',
        name: 'LatestInformation',
        component: LatestInformation
    }, {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    }]
})