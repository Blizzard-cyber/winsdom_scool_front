import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/comment/head'
import Bottom from '@/components/comment/bottom'
import First from '@/components/first'
import Inside from '@/components/inside'
import Index from '@/components/index.vue'

import PhotoNews from '@/components/dynamic/photo-news'
import LatestInformation from '@/components/dynamic/latest-information'

import ContactUs from '@/components/contact/contact-us'
import Info from '@/components/info'

import Course from '@/components/info_modules/course'
import CourseTable from '@/components/info_modules/course_table'
import ExamFee from '@/components/info_modules/exam_fee'
import Exam from '@/components/info_modules/exam'
import Gdesign from '@/components/info_modules/gdesign'
import Lab from '@/components/info_modules/lab'
import Personal from '@/components/info_modules/personal'
import Remark from '@/components/info_modules/remark'
import StudyFee from '@/components/info_modules/study_fee'
import Notice from '@/components/notice'
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
    },
    {
        path: '/Info',
        name: 'Info',
        component: Info
    },
     {
        path: '/PhotoNews',
        name: 'PhotoNews',
        component: PhotoNews
    }, {
        path: '/LatestInformation',
        name: 'LatestInformation',
        component: LatestInformation
    }, {
        path: '/LatestInformation',
        name: 'LatestInformation',
        component: LatestInformation
    }, {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    }
        , {
        path: '/Course',
        name: 'Course',
        component: Course
    },
    {
        path: '/CourseTable',
        name: 'CourseTable',
        component: CourseTable
    },
    {
        path: '/ExamFee',
        name: 'ExamFee',
        component: ExamFee
    },
    {
        path: '/Exam',
        name: 'Exam',
        component: Exam
    },
    {
        path: '/Gdesign',
        name: 'Gdesign',
        component: Gdesign
    },
    {
        path: '/Lab',
        name: 'Lab',
        component: Lab
    },
    {
        path: '/Personal',
        name: 'Personal',
        component: Personal
    },
    {
        path: '/Remark',
        name: 'Remark',
        component: Remark
    },
    {
        path: '/StudyFee',
        name: 'StudyFee',
        component: StudyFee
        },
        {
            path: '/Notice',
            name: 'Notice',
            component: Notice
        }]
})