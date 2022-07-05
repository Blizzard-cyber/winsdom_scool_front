<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="block1">
    <Table border height="300" :columns="columns" :data="data"></Table>
    </div>
    <div class="block2" style="padding: 10px; background: #f8f8f9;width: 1000px;">
        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Display right content" extra="details" />
            </CellGroup>
        </Card>
    </div>
    <my-bottom/>
    </div>
   </div>
</template>
<script>

export default {
  
  data() {
    return {
      columns: [
        {
          title: '课程代码',
          key: 'cid',
          sortable: true
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
              label: '第一类',
              value: '英语'
            },
            {
              label: '第二类',
              value: '语文'
            },
            {
              label: '第三类',
              value: '数学'
            },
            {
              label: '第四类',
              value: '化学'
            },
            {
              label: '第五类',
              value: '物理'
            },
            {
              label: '第六类',
              value: '生物'
            }
          ],
          filterMethod(value, row) {
            return row.ctype.indexOf(value) > -1;
          }
        },
        {
          title: '学分',
          key: 'cridts',
          filters: [
            {
              label: '0.5',
              value: '0.5'
            },
            {
              label: '1',
              value: '1'
            },
            {
              label: '2',
              value: '2'
            },
            {
              label: '3',
              value: '3'
            },
            {
              label: '3.5',
              value: '3.5'
            },
            {
              label: '4',
              value: '4'
            },
            {
              label: '5',
              value: '5'
            },
            {
              label: '6',
              value: '6'
            }
          ],
          filterMethod(value, row) {
            return row.cridts.indexOf(value) > -1;
          }
        },
        {
          title: '成绩',
          key: 'remark',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '60-90',
              value: 2
            },
            {
              label: '>=90',
              value: 3
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.remark < 60;
            } else if (value === 2) {
              return row.reamrk >= 60 && row.remark < 90;
            }
            else if (value === 3) {
              return row.remark >= 90;
            }
          }
        },
        {
          title: '补考成绩',
          key: 're_exam',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '>=60',
              value: 2
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.re_exam < 60;
            } else if (value === 2) {
              return row.re_exam >= 60;
            }

          }
        },
        {
          title: '重修成绩',
          key: 're_study',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '>=60',
              value: 2
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.re_exam < 60;
            } else if (value === 2) {
              return row.re_exam >= 60;
            }

          }
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
  },
  methods: {
    handleSummary({ columns, data }) {
      const sums = {};
      columns.forEach((column, index) => {
        const key = column.key;
        if (index === 0) {
          sums[key] = {
            key,
            value: '总价'
          };
          return;
        }
      })
    }
  }
}
</script>

<style scoped>
.block1{
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>