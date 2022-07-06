<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="学费缴纳信息"></el-page-header>
     <div class="block1">
    <Table border :columns="columns" :data="data"></Table>
    </div>
    <my-bottom/>
    </div>
   </div>
</template>
<script>

export default {
  
  data() {
    return {
      totol: 0,
      columns: [
        {
          title: '订单编号',
          key: 'id',
          sortable: true
        },
        
        {
          title: '费用名称',
          key: 'name',
          filters: [
            {
              label: '毕业论文答辩费',
              value: '毕业论文答辩费'
            },
            {
              label: '住宿费',
              value: '住宿费'
            },
            {
              label: '雅思班学习费',
              value: '雅思班学习费'
            },
            {
              label: '学费',
              value: '学费'
            },
            {
              label: '托福考试费',
              value: '托福考试费'
            }
            
          ],
          filterMethod(value, row) {
            return row.ctype.indexOf(value) > -1;
          }
        },

        {
          title: '订单产生时间',
          key: 'startTime',
          sortable: true
        },
         {
          title: '缴费时间',
          key: 'payTime',
          sortable: true
        },
        {
          title: '缴费状态',
          key: 'status',
          filters: [
            {
              label: '已缴费',
              value: '已缴费'
            },
            {
              label: '未缴费',
              value: '未缴费'
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === '已缴费') {
              return row.status === '已缴费';
            } else if (value === '未缴费') {
              return row.status === '未缴费';
            }

          }
        },
      ],
      data: [
      ]
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    goBack() {
      this.$router.replace('/Info');
    },
    getData() {
      let cookie_id = this.$cookie.get('ID');
      this.$axios.get('http://127.0.0.1:8080/pay/' + cookie_id).then(response => {
        this.data = response.data;
        for (let i = 0; i < this.data.length; i++) {
          if (response.data[i].status == 1) {
            this.data[i].status = '已缴费';
          }
          else {
            this.data[i].status = '未缴费';
            this.data[i].payTime = null;
          }
        }
      }
      )
    }
    
  }
}
</script>

<style scoped>
.el-page-header{
    margin-top: 20px;
  }
.block1{
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>