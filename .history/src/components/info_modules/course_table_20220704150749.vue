<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class =table>
        
<SchedulingTable
  @add="add"
  @remove="remove"
  @edit="showEditCourseModal"
  :initialCourses="courses"
></SchedulingTable>
     </div>
      <my-bottom/>
    </div>
   </div>
</template>

<script>

import SchedulingTable from "@lanserdi/scheduling-table";
export default {
  components: { SchedulingTable }
}
</script>

<style>

</style>