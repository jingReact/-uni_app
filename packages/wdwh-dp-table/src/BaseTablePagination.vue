<template>
  <el-pagination
    ref="pagination"
    background
    :current-page="currentPage"
    :page-size="options.size"
    :page-sizes="options.sizes"
    :layout="options.layout ? options.layout : 'total, prev, pager, next'"
    :total="options.total"
    :pager-count="4"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseTablePagination',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    search: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      sort: {
        prop: '',
        order: ''
      }
    }
  },
  computed: {
    currentPage () {
      return this.options.currentPage || 0
    }
  },
  methods: {
    getNowParams () {
      const pagination = this.$refs.pagination
      return {
        page: pagination.currentPage || 1,
        size: pagination.pageSize || 10,
        orderType: this.sort.order
          ? this.sort.order.replace('ending', '')
          : undefined,
        orderColumn: this.sort.prop
      }
    },
    handleSizeChange (val) {
      this.search &&
        this.search({
          ...this.getNowParams(),
          size: val,
          page: 1
        })
      this.options.size = val
    },
    handleCurrentChange (val) {
      this.search &&
        this.search({
          ...this.getNowParams(),
          page: val
        })
      this.options.currentPage = val
    }
  }
})
</script>

<style lang="scss" scoped></style>
