<template>
    
    <Form style="width: 50%" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100">
        <!-- <FormItem label="Book number">
            <Input v-model="ruleForm.id" readonly></Input>
        </FormItem> -->
        <FormItem label="Book name" prop="name">
            <Input v-model="ruleForm.name"></Input>
        </FormItem>
        <FormItem label="Author" prop="author">
            <Input v-model="ruleForm.author"></Input>
        </FormItem>
        <FormItem label="Publisher" prop="publish">
            <Input v-model="ruleForm.publish"></Input>
        </FormItem>
        <FormItem label="Price" prop="price">
            <Input v-model="ruleForm.price"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary"  @click="submitForm('ruleForm')">submit</Button>
            <Button @click="resetForm('ruleForm')" style="margin-left: 8px">reset</Button>
        </FormItem>

    </Form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: '',
                    publish: '',
                    price: ''
                },
                rules: {
                    name: [
                        { required: true, message: 'Book name cannot be empty', trigger: 'blur' }
                    ],
                    author:[
                        { required: true, message: 'Author cannot be empty', trigger: 'blur' }
                    ],
                    publish:[
                        { required: true, message: 'Publisher cannot be empty', trigger: 'blur' }
                    ],
                    price:[
                        { required: true, message: 'Price cannot be empty', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.name+'》Added successfully！', 'Message', {
                                    confirmButtonText: 'confirm',
                                    callback: action => {
                                        _this.$router.push('/BookManage')
                                    }
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

