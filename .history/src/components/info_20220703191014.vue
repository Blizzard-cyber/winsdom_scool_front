   <template>
    <el-row>
      <el-col
        v-for="item in roles"
        :key="item.id"
        :span="5"
        style="margin-bottom: 10px"
        :offset="1"
      >
        <el-card>
          <div slot="header" class="clearfix">
            <i class="el-icon-user" /><span style="margin-left: 5px">{{
              item.roleName
            }}</span>
            <div
              style="display: inline-block; float: right; cursor: pointer"
              @click="doEdit(item.id)"
            >
              <el-tooltip effect="dark" content="编辑角色" placement="top">
                <i class="el-icon-edit-outline" style="margin-left: 15px" />
              </el-tooltip>
            </div>
          </div>
          <div>
            <ul class="role-info">
              <li>
                <div class="role-left">描述信息：{{ item.description }}</div>
              </li>
              <li>
                <div class="role-left">
                  创建时间：{{ parseTime(item.createTime) }}
                </div>
              </li>
            </ul>
          </div>
          <div
            style="display: inline-block; float: left; cursor: pointer"
            @click="doAssignPemission(item.id, item.roleName)"
          >
            <el-tooltip effect="dark" content="权限分配" placement="bottom">
              <i class="el-icon-menu" />
            </el-tooltip>
          </div>
          <div
            style="display: inline-block; float: right; cursor: pointer"
            @click="doDelete(item.id)"
          >
            <el-tooltip effect="dark" content="删除角色" placement="bottom">
              <i class="el-icon-delete" style="margin-left: 15px" />
            </el-tooltip>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </template>

 <script>
  export default {
    name: "Info",
    data(){
      return{
        roles:[]
      }
    },
    method:{
      
    }
  }
  </script>


<style>

</style>