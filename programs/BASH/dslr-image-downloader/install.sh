#!/bin/bash

#######################################################################################
##### This is a tempporary update file and by so, should not be executed manually #####
#######################################################################################

var_string_app_name="dslr-image-downloader";
var_string_file_path="`pwd`/${var_string_app_name}";
var_string_file_data="`curl -s "https://raw.githubusercontent.com/paullouismas/paullouismas.github.io/master/programs/BASH/dslr-image-downloader/app.sh" | openssl enc -a -A`";
var_string_symlink_path="/bin";

echo "You will be prompted for an administrator password to proceed to the installation.";
echo "The script will install the app in the current working directory.";
echo "It will then create a symbolic link to the file in the directory ${var_string_symlink_path}";

sudo echo "${var_string_file_data}" | openssl enc -a -A -d > "${var_string_file_path}";
sudo chmod +x "${var_string_file_path}";
sudo ln -s "${var_string_file_path}" "${var_string_symlink_path}";

echo -e "App installed successfully."
