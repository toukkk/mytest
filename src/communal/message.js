

export const deleteMsg = function (data, index) {
    this.$confirm('确认删除该记录吗?', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        data.algoId ? this.tableData.splice(index, 1) :
            data.supplierName ? this.supplierData.splice(index, 1) :
                data.algoName ? this.details.algoEmpower.splice(index, 1) :
                    this.details.userEmpower.splice(index, 1);
        this.$message({
            type: 'success',
            message: '删除成功'
        });
    }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        });
    });
};

export const emptyMsg = function (val) {
    this.$confirm('确认清空所有记录吗?', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        val == "algo" ? this.details.algoEmpower = [] : this.details.userEmpower = []
        this.$message({
            type: 'success',
            message: '删除成功'
        });
    }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        });
    });
};



