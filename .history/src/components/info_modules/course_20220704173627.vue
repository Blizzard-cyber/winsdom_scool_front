<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
    <Table border :columns="columns" :data="data"></Table>
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
                        key: 're_remark'
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
                    ctype: '1',
                    cridts: '1',
                    remark: '1',
                    re_remark: '1',
                    other: '1'
                },
                
                {
                    cid: '2',
                    cname: '数学',
                    ctype: '2',
                    cridts: '2',
                    remark: '2',
                    re_remark: '2',
                    other: '2'
                },
                {
                    cid: '3',
                    cname: '英语',
                    ctype: '3',
                    cridts: '3',
                    remark: '3',
                    re_remark: '3',
                    other: '3'
                },
                {
                    cid: '4',
                    cname: '物理',
                    ctype: '4',
                    cridts: '4',
                    remark: '4',
                    re_remark: '4',
                    other: '4'
                },
                {
                    cid: '5',
                    cname: '化学',
                    ctype: '5',
                    cridts: '5',
                    remark: '5',
                    re_remark: '5',
                    other: '5'
                },
                {
                    cid: '6',
                    cname: '生物',
                    ctype: '6',
                    cridts: '6',
                    remark: '6',
                    re_remark: '6',
                    other: '6'
                },
                {
                    cid: '7',
                    cname: '政治',
                    ctype: '7',
                    cridts: '7',
                    remark: '7',
                    re_remark: '7',
                    other: '7'
                },
                {
                    cid: '8',
                    cname: '历史',
                    ctype: '8',
                    cridts: '8',
                }
                    ]
            }
        }
    }
</script>