<?php

class Test {

    private $remoteLink = 'https://raw.githubusercontent.com/dominictarr/random-name/master/names.json';
    private $tempDB = 'db.json';

    /**
     * init data for requests
     */
    private function init()
    {
        if(!file_exists($this->tempDB))
        {
            $data = @file_get_contents($this->remoteLink);

            if($data !== FALSE)
            {
                file_put_contents($this->tempDB, $data);
            }
        }
    }

    /**
     * Get data from remote server
     */
    public function getData($environment)
    {
        $this->init();

        $data = @file_get_contents($this->tempDB);
        if($data === FALSE)
        {
            echo '[]';
            return;
        }

        $list = json_decode($data, true);

        $output = [];

        if(array_key_exists('p', $environment))
        {
            if($list !== NULL)
            {
                foreach ($list as $li)
                {
                    if(strpos($li, $environment['p']) !== false)
                    {
                        array_push($output, $li);
                    }
                }
            }
        }
        else
        {
            $output = ($list === NULL) ? [] : $list;
        }

        echo json_encode($output);
    }

}

(new Test)->getData($_GET);

?>
