<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
    <Table border height="200" :columns="columns" :data="data"></Table>
    <my-bottom/>
    </div>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '课程代码',
                        key: 'cid'
                    },
                    {
                        title: '课程名称',
                        key: 'cname'
                    },
                    {
                        title: '课程类别',
                        key: 'ctype',
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: '学分',
                        key: 'cridts',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                },
                    {
                        title: '成绩',
                        key: 'remark'
                },
                    {
                        title: '补考成绩',
                        key: 're_exam'
                },
                {
                        title: '重修成绩',
                        key: 're_study'
                    },
                    {
                        title: '备注',
                        key: 'other'
                    },
                ],
              data: [
                {
                    cid: '1',
                    cname: '语文',
                    ctype: '语文',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                },
                {
                    cid: '2',
                    cname: '数学',
                    ctype: '数学',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                },
                {
                    cid: '3',
                    cname: '英语',
                    ctype: '英语',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                },
                {
                    cid: '4',
                    cname: '物理',
                    ctype: '物理',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                },
                {
                    cid: '5',
                    cname: '化学',
                    ctype: '化学',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                },
                {
                    cid: '6',
                    cname: '生物',
                    ctype: '生物',
                    cridts: '3',
                    remark: '90',
                    re_exam: '90',
                    re_study: '90',
                    other: '90'
                }
                
                    ]
            }
        }
    }
</script>

<style scoped>

</style>