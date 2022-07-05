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
            courses: [
                {
                    name: "早读",
                    day: 3,
                    start: [6, 0],
                    end: [6, 45],
                }
            ],
        };
    },
    methods: {
        add() {
            this.course.push({
                name: "早读",
                day: 3,
                start: [6, 0],
                end: [6, 45],
            });
        },
        remove(index) {
            this.courses.splice(index, 1);
        },
        showEditCourseModal(course) {
            this.course = course;
            this.showEditCourseModal = true;
        },
    },
}
</script>

<style>

</style>