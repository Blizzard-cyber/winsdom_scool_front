<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class =table>
      <SchedulingTable
        @add="add"
        
        :initialCourses="courses"
        >
      </SchedulingTable>
     </div>
      <my-bottom/>
    </div>
   </div>
</template>

<script>

import SchedulingTable from "@lanserdi/scheduling-table";
export default {
    components: { SchedulingTable },
    data() {
        return {
            course: [
                {
                    name: "早读",
                    day: 3,
                    start: [6, 0],
                    end: [6, 45],
                }
            ],
        };
    }
}
</script>

<style>

</style>