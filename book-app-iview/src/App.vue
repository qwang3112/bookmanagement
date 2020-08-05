<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        
                        <MenuItem name="/BookManage" to="/BookManage" style="position: absolute;right: 0px;">
                            <Icon type="ios-keypad"></Icon>
                            Book Management
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header>
            
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Book Management</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                
                                <Submenu name="/BookManage" to="/BookManage">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Book Manage
                                    </template>
                                    <MenuItem name="/BookManage" to="/BookManage">Search Book</MenuItem>
                                    <MenuItem name="/AddBook" to="/AddBook">Add Book</MenuItem>
                                </Submenu>
                                
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2020-2030 &copy; DevelopByJohn</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
    export default {
        
    }
</script>
