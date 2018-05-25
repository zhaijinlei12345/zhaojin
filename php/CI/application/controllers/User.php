<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

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
	 */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
    }


    public function login()
	  {
	      $this->load->model('User_model');
	  	$this->load->view('login');
	  }
//	  public function reg()
//	  {
//	  	$this->load->view('reg');
//	  }
//------进入注册界面---------
    public function reg(){

         $img = $this->captcha();
        $this->load->view('reg',array('img'=>$img));
    }

    public  function  change_code(){
        $img = $this->captcha();
        echo  $img;
    }
//----------验证码生成并存入session-------
    public function  captcha(){
        $this->load->helper('captcha');

        $rand = rand(1000,9999);
        // /-----将数据存入session----/
        $this->session->set_userdata(array(
            "captcha" => $rand
        ));

        $vals = array(
            'word'      => $rand,
            'img_path'  => './captcha/',
            'img_url'   => base_url().'captcha/',
            'font_path' => './path/to/fonts/texb.ttf',
            'img_width' => '150',
            'img_height'    => 30,
            'expiration'    => 7200,
            'word_length'   => 8,
            'font_size' => 16,

            // White background and border, black text and red grid
            'colors'    => array(
                'background' => array(255, 255, 255),
                'border' => array(255, 255, 255),
                'text' => array(0, 0, 0),
                'grid' => array(255, 40, 40)
            )
        );

        $cap = create_captcha($vals);
        $img = $cap['image'];
        return $img;


    }

//-----------添加注册信息------------
    public function  add_user(){
        $this->load->model('User_model');
        $email=$this->input->get('email');
        $name=$this->input->get('name');
        $pwd=$this->input->get('pwd');
        $pwd2=$this->input->get('pwd2');
        $sex=$this->input->get('gender');
        $city=$this->input->get('city');
        $province=$this->input->get('province');
        $code=$this->input->get('vcode');

        if($pwd != $pwd2){
            echo '1';
            die();
        }
        //-----从session读取数据------//
         $captcha = $this->session->userdata('captcha');
        if($code != $captcha){
            echo '2';
            die();
        }
        $fn= $this->User_model->add($email,$name,$pwd,$sex,$city,$province);
        if($fn>0){
            echo 'success';
        }else{
            echo '<script>alert("系统错误，请稍后重试！")</script>';
                  redirect('User/reg');
        }
    }

// -------------邮箱验证-----------
    public function check_email(){
        $this->load->model('User_model');
        $email = $this->input->get('email');

        $result = $this->User_model->check_email($email);
        //var_dump(count($result));
        //die();
        if(count($result)>0){
            echo '1';
        }else{
            echo '0';
        }
    }
//---------------登录检测------------
    public  function  check_login(){
        $this->load->model('User_model');
        $email=$this->input->get('email');
        $pwd=$this->input->get('pwd');
        $result = $this->User_model->check_email($email);
        if(count($result)==0){
            echo '2';
        }else {
            if ($result[0]->password==$pwd){
                echo '0';
                $this->session->set_userdata(array(
                    "user" => $result[0]
                ));
            }else{
                echo '1';
            }
        }
    }
//---------------退出--------------
    public  function  logout(){
        $this->session->unset_userdata('user');
        redirect("welcome/index");
    }
//-----------自动登录--------
    public  function  auto_login(){
        $this->load->model('User_model');
        $email = $this->input->get('email');
        $result = $this->User_model->check_email($email);
        $this->session->set_userdata(array(
           'user'=>$result[0]
        ));
        redirect("welcome/indexed");
    }

//---------管理个人信息--------------
    public function  adminIndex(){
        $this->load->view('adminIndex');
    }



}
