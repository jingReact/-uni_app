<template>
  <div class="table-frame-modular">
    <el-table
      highlight-current-row
      v-bind="$attrs"
      :render-header="renderHeader"
      v-on="$listeners"
      v-loading="loading"
    >
      <el-table-column
        v-if="showSelection"
        align="center"
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column v-if="showIndex" align="center" label="序号" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        align="center"
        :label="item.name"
        :prop="item.prop"
        :vokey="index"
        :width="item.width"
      >
        <template slot-scope="{ row }">
          <span
            :title="
              item.formatter ? item.formatter(row[item.prop]) : row[item.prop]
            "
          >
            {{
              item.formatter ? item.formatter(row[item.prop]) : row[item.prop]
            }}
          </span>
        </template>
      </el-table-column>
      <slot></slot>
      <template slot="empty">
        <span v-if="!loading">暂无数据</span>
        <span v-else></span>
      </template>
    </el-table>
    <BaseTablePagination
      v-if="showPagination"
      :options="paginationOptions"
      :search="search"
    />
  </div>
</template>

<script>
import BaseTablePagination from './BaseTablePagination.vue'

export default {
  name: 'wdwh-dp-table',
  inheritAttrs: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    showPagination: {
      type: Boolean,
      default: false
    },
    paginationOptions: {
      type: Object,
      default: () => ({})
    },
    search: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    BaseTablePagination
  },
  data () {
    return {
      tooltipStatus: true
    }
  },
  methods: {
    renderHeader (h, { column }) {
      return h(
        'span',
        {
          domProps: {
            title: column.label
          }
        },
        column.label
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.table-frame-modular::v-deep .el-checkbox__inner {
  width: 20px;
  height: 20px;
}
.table-frame-modular::v-deep .el-checkbox__inner::after {
  height: 10px;
  left: 7px;
  top: 2px;
  width: 4px;
}
.table-frame-modular /deep/ .el-table__body tr.current-row > td {
  background-color: #214396 !important;
  color: #fff;
}

.table-frame-modular /deep/ {
  .el-table,
  .el-table tr,
  .el-table th,
  .el-table td {
    color: #ffffff;
    background: none !important;
    border: none !important;
    font-family: 'Microsoft YaHei', '微软雅黑';
  }
  .el-table thead tr {
    font-weight: 500;
    background: rgba(255, 255, 255, 0.05) !important;
  }
  .el-table tbody tr {
    font-weight: 500;
  }
  .el-table .el-table__row--striped {
    background: rgba(255, 255, 255, 0.05) !important;
  }
  .el-table thead tr,
  .el-table tbody tr {
    height: 12px !important;
    font-size: 12px !important;
    line-height: 12px !important;
  }
  .el-table tbody tr button {
    font-size: 12px !important;
  }
  .has-gutter tr th,
  thead tr th {
    color: #54b7ff !important;
    font-size: 14px !important;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background: none;
  }
  .el-table .cell {
    white-space: nowrap;
    line-height: normal;
  }
  .el-table tbody .warning td {
    color: #ffc400 !important;
  }
  .el-table tbody .dangers td {
    color: #e46467 !important;
  }
  .el-table__empty-text {
    font-size: 15px !important;
  }
  .el-pagination {
    text-align: right;
    span,
    i {
      font-size: 14px !important;
      color: #02d6f9 !important;
    }
    .el-pager li,
    button,
    span:not([class*='suffix']) {
      color: #fff !important;
      font-size: 14px !important;
      height: 50px;
      line-height: 50px;
      font-weight: normal;
    }
    .el-pager li:not(.disabled) {
      min-width: 50px;
      &.active {
        color: #02d6f9 !important;
      }
    }
    .btn-prev,
    .btn-next {
      width: 50px;
    }
    .btn-next,
    .btn-prev,
    .el-pager li {
      margin: 0 8px;
      background-color: rgba(255, 255, 255, 0.05) !important;
    }

    .el-pagination__sizes {
      width: 130px;
      .el-input {
        width: 130px;
      }
    }
    .el-pagination__editor.el-input {
      width: 70px;
      margin: 0 8px;
    }
    .el-pagination .el-input__suffix {
      right: 3px;
    }
    .el-input {
      height: 50px;
      input,
      textarea {
        min-height: 50px;
        font-size: 28px;
        color: #00d6f9;
        border: 1px solid #00d6f9;
        border-radius: 12px;
        background: transparent;
      }
    }
    .el-select {
      .el-select-dropdown {
        width: 100% !important;
        border: 2px solid #6db8f9;
        background: #06284b;
        .el-select-dropdown__item {
          height: 60px;
          line-height: 60px;
          font-size: 25px;
          color: #fafafa;
          &.hover,
          &.selected {
            color: #00d6f9;
            background: transparent;
          }
        }
      }
    }
  }
}
</style>
