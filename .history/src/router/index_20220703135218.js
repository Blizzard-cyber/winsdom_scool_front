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

import SchoolProfile from '@/components/overview/school-profile'
import History from '@/components/overview/history'
import Teacher from '@/components/overview/teacher'
import GiftedPerson from '@/components/overview/gifted-person'
import BeautifulSchool from '@/components/overview/beautiful-school'

import EnvironmentalProtectionTeaching from '@/components/education/environmentalProtection-teaching'
import Achievement from '@/components/education/achievement'
import TeachingResearch from '@/components/education/teaching-research'
import TeachingResource from '@/components/education/teaching-resource'

import GermanManagement from '@/components/employ/german-management'
import SectionPage from '@/components/employ/section-page'
import TeachingManagement from '@/components/employ/teaching-management'

import ContactUs from '@/components/contact/contact-us'

import BuildParty from '@/components/party/build-party'

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
        path: '/EnvironmentalProtectionTeaching',
        name: 'EnvironmentalProtectionTeaching',
        component: EnvironmentalProtectionTeaching
    }, {
        path: '/Achievement',
        name: 'Achievement',
        component: Achievement
    }, {
        path: '/TeachingResearch',
        name: 'TeachingResearch',
        component: TeachingResearch
    }, {
        path: '/TeachingResource',
        name: 'TeachingResource',
        component: TeachingResource
    }, {
        path: '/GermanManagement',
        name: 'GermanManagement',
        component: GermanManagement
    }, {
        path: '/SectionPage',
        name: 'SectionPage',
        component: SectionPage
    }, {
        path: '/TeachingManagement',
        name: 'TeachingManagement',
        component: TeachingManagement
    }, {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    }, {
        path: '/BuildParty',
        name: 'BuildParty',
        component: BuildParty
    }]
})