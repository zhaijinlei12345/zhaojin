<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
     *
     *
	 */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Article_model');
        $this->load->model('User_model');

    }

//-------------游客界面-------------
    public function index()
	{
        $this->load->library('pagination');
        $total = $this->Article_model->get_count_article();

        $config['base_url'] = base_url().'welcome/index';//当前控制器方法
        $config['total_rows'] = $total;//总数
        $config['per_page'] = 2;//每页显示条数

//      $config['first_link'] = 'one';

//		$config['next_link'] = '**';

        $this->pagination->initialize($config);//进行初始化配置；

        $links = $this->pagination->create_links();//分页列表

//     $this->uri->segment(3)//偏移量计算 3为地址层数xxx/ww/1，3层，从当前页开始计算；
	   $results= $this->Article_model->get_article_list($this->uri->segment(3),$config['per_page']);//主页文章显示数目

//     $user = $this->session->userdata('user');
//     $types = $this->Article_model->get_article_type($user->user_id);

        //------获取文章分类----------------//
        $types = $this->Article_model->get_article_type();

        //-------数据传输通道-----------//
		$this->load->view('index',array('list'=>$results,'types'=>$types,'links'=>$links));
	}




//--------登录者界面--------------
	public function  indexed(){
        $user = $this->session->userdata('user');
        $this->load->library('pagination');
        $total = $this->Article_model->get_count_article_login($user->user_id);

        $config['base_url'] = base_url().'welcome/indexed';//当前控制器方法
        $config['total_rows'] = $total;//总数
        $config['per_page'] = 2;//每页显示条数

//      $config['first_link'] = 'one';

//		$config['next_link'] = '**';

        $this->pagination->initialize($config);//进行初始化配置；
        $links = $this->pagination->create_links();//分页列表
//     $this->uri->segment(3)//偏移量计算 3为地址层数xxx/ww/1，3层，从当前页开始计算；
        $results= $this->Article_model->get_article_list_login($this->uri->segment(3),$config['per_page'],$user->user_id);//主页文章显示数目
        $types = $this->Article_model->get_article_type_login($user->user_id);

        //------获取文章分类----------------//
        //$types = $this->Article_model->get_article_type();
        //-----------获取未读留言---------------
        $msg_count = $this->Article_model->get_msg_count($user->user_id);

        //-------数据传输通道-----------//
        $this->load->view('indexed',array('list'=>$results,'types'=>$types,'links'=>$links,	'count'=>$msg_count));


    }


//-------发表文章界面----------------
    public function  newblog(){
        $user = $this->session->userdata('user');
        $types = $this->Article_model->get_article_type_by_user_id($user->user_id);
        $this->load->view('newBlog',array('types'=>$types));

     }

     //---------发表文章功能------------
    public function publish_blog(){

        $title = $this->input->post('title');
        $catalog = $this->input->post('catalog');
        $content = $this->input->post('content');
        $user = $this->session->userdata('user');
        //获取user_id 和 当前时间


        date_default_timezone_set('Asia/Shanghai');

        $rows = $this->Article_model->publish_blog(array(
            'title'=>$title,
            'content'=>$content,
            'post_date'=>date("Y-m-d h:m:s"),
            'user_id'=>$user->user_id,
            'type_id'=>$catalog
        ));

         if ($rows>0){
            redirect('welcome/indexed') ;
         }

    }
//------------文章类别管理-------------
    public  function  blogCatalogs(){
       $user = $this->session->userdata('user');
        $types = $this->Article_model->get_article_type_login($user->user_id);
        $this->load->view('blogCatalogs',array('types'=>$types));
    }
    //------------文章类别修改-------------
    public  function  editCatalog(){
        $user = $this->session->userdata('user');
        $types = $this->Article_model->get_article_type_login($user->user_id);
        $this->load->view('editCatalog',array('types'=>$types));
    }

    //------------文章类别添加-------------
    public function add_type(){
        $name = $this->input->get('name');
        if($name==""){
            echo '2';
            die();
        }

        $user = $this->session->userdata('user');
        $rows = $this->Article_model->add_type($name,$user->user_id);
        if($rows >0){
            echo '1';
        }
    }
    //------------文章类别修改-------------
    public function  update_type(){
        $name = $this->input->get('name');
        $id = $this->input->get('id');
        if($name==""){
            echo '2';
            die();
        }
        $rows = $this->Article_model->update_type($name,$id);
        if($rows >0){
            echo '1';
        }
    }
    //------------文章类别删除-------------
    public function  del_type()
    {
        $id = $this->input->get('type_id');
        $user = $this->session->userdata('user');

        $result = $this->Article_model->get_type_by_id_userid($user->user_id, $id);
        if (count($result) == 0) {
            echo '2';
        } else {
            $rows = $this->Article_model->del_type($id);
            if ($rows > 0) {
                echo '1';
            }
        }
    }
   //--------------文章管理界面------------------
   public function  blogs(){
       $user = $this->session->userdata('user');

       $total = $this->Article_model->get_count_article_login($user->user_id);
       $this->load->library('pagination');
       $config['base_url'] = base_url().'welcome/blogs';//当前控制器方法
       $config['total_rows'] = $total;//总数
       $config['per_page'] = 4;//每页显示条数
       $this->pagination->initialize($config);//进行初始化配置；
       $links = $this->pagination->create_links();//分页列表
       $types = $this->Article_model->get_article($this->uri->segment(3),$config['per_page'],$user->user_id);
      // $types = $this->Article_model->get_article($user->user_id);
       $this->load->view('blogs',array('types'=>$types,'links'=>$links));
   }
   //--------------删除文章-----------------------
    public function del_article()
    {
        $ids = $this->input->get('ids');
        $rows = $this->Article_model->del_article_by_id($ids);
        if ($rows > 0) {
            echo '1';
        }

    }

  //--------------单个评论管理界面-------------
    public  function viewPost_comment(){
        $id = $this->input->get('id');
        $row = $this->Article_model->get_article_by_id($id);

        $date_str = $this->time_tran($row->post_date);
        $row->post_date = $date_str;
        $comments = $this->Article_model->get_comment_by_article_id($id);



        //-------------查询上下文-------------------------------

        //--------------全部文章--------------------------
        $result = $this->Article_model->get_article_all();
        $next_article = null;
        $prev_article = null;
        foreach($result as $index=>$article){
            if($article->article_id == $id){
                if($index >0){
                    $prev_article = $result[$index-1];
                }
                if($index < count($result) - 1){
                    $next_article = $result[$index+1];
                }
            }
        }
        $this->load->view('viewPost_comment',array(
            'article'=>$row,
            'comments'=>$comments,
            'articles'=>$result,
            'next' =>$next_article,
			'prev' =>$prev_article
        ));
    }



//    public  function viewPost_comment(){
//        $id = $this->input->get('id');
//        $this->load->library('pagination');
//        $total = $this->Article_model->get_comment_count_by_article_id($id);
//        $config['base_url'] = base_url().'welcome/viewPost_comment';//当前控制器方法
//        $config['total_rows'] = $total;//总数
//        $config['per_page'] = 4;//每页显示条数
//        $this->pagination->initialize($config);//进行初始化配置；
//        $links = $this->pagination->create_links();//分页列表
//
//
//
//
//        $row = $this->Article_model->get_article_by_id($id);
//        $date_str = $this->time_tran($row->post_date);
//        $row->post_date = $date_str;
//        $comments = $this->Article_model->get_comment_by_article_id($this->uri->segment(3),$config['per_page'],$id);
//
//
//
//        //-------------查询上下文-------------------------------
//        //--------------全部文章--------------------------
//        $result = $this->Article_model->get_article_all();
//        $next_article = null;
//        $prev_article = null;
//        foreach($result as $index=>$article){
//            if($article->article_id == $id){
//                if($index >0){
//                    $prev_article = $result[$index-1];
//                }
//                if($index < count($result) - 1){
//                    $next_article = $result[$index+1];
//                }
//            }
//        }
//        $this->load->view('viewPost_comment',array(
//            'article'=>$row,
//            'comments'=>$comments,
//            'articles'=>$result,
//            'next' =>$next_article,
//            'prev' =>$prev_article,
//            'links'=>$links
//        ));
//    }

//------------评论添加-----------------------
public function conennt_insert(){
    $user = $this->session->userdata('user');
    $content = $this->input->get('content');
    $article_id = $this->input->get('article_id');

    date_default_timezone_set('Asia/Shanghai');

    $rows = $this->Article_model->publish_connet(array(
        'content'=>$content,
        'post_date'=>date("Y-m-d h:m:s"),
        'user_id'=>$user->user_id,
        'article_id'=> $article_id
    ));
    if ($rows>0){
        echo '1';
    }



}
//--------------评论管理界面------------------
  public function  blogComments(){
        $user = $this->session->userdata('user');
        $result = $this->Article_model->blog_comments($user->user_id);
        $this->load->view('blogComments',array(
            'result'=>$result
        ));
    }

//--------------------进入留言界面----------------------------
    public function  sendMsg(){
        $id = $this->input->get('id');
        $user = $this->User_model->get_user_by_id($id);
        $this->load->view("sendMsg",array('autor'=>$user));

    }

//------------时间计算---------------------------
    function time_tran($the_time)
    {
        $now_time = date("Y-m-d H:i:s", time() + 8 * 60 * 60);
        $now_time = strtotime($now_time);
        $show_time = strtotime($the_time);
        $dur = $now_time - $show_time;
        if ($dur < 0) {
            return $the_time;
        } else {
            if ($dur < 60) {
                return $dur . '秒前';
            } else {
                if ($dur < 3600) {
                    return floor($dur / 60) . '分钟前';
                } else {
                    if ($dur < 86400) {
                        return floor($dur / 3600) . '小时前';
                    } else {
                        if ($dur < 259200) {//3天内
                            return floor($dur / 86400) . '天前';
                        } else {
                            return $the_time;
                        }
                    }
                }
            }
        }
    }
//---------------评论管理------------------------







    //-------------留言添加----------------------
    public function send_msg_ok(){
        $id = $this->input->post('autorId');
        $content = $this->input->post('content');
        $user = $this->session->userdata('user');

        $rows = $this->Article_model->add_msg(array(
            'content'=>$content,
            'sender'=>$user->user_id,
            'post_date'=>date("Y-m-d h:m:s"),
            'receiver'=>$id
        ));

        if($rows >0){
            redirect("welcome/indexed");
        }

    }


    //--------------个签设置----------------
    public  function  userSettings(){
        $this->load->view('userSettings');
    }



// select * from t_message m,t_user u where m.sender =u.user_id and m.receiver = 53
//
// update t_message set is_read = 1 where receiver = 53
//
// select * from t_article where title like '%钢铁%' or content like '%钢铁%'

}
