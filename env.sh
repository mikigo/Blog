#!/bin/bash

set -e

# check path
docs_path="$( cd "$( dirname "$0")" && pwd)"
check_mark="/home/$(whoami)/env_check"
if [[ "${docs_path}" != "${PWD}" ]]; then
    cd "${docs_path}" || exit 1
fi

[[ "$(arch)" != "x86_64" ]] && {
    echo -e "\n\033[41;37merror: 请在 x86_64 环境下使用，暂未适配其他架构，点击Enter退出! \033[0m"
    read -r
    exit 1
}

# 定义下载版本
node_version=v18.16.1

# 定义/opt目录下node目录的名称，以兼容多个node版本
opt_node_dir="node${node_version}"

set +e
sudo dbus-send --print-reply --type=method_call --system --dest=com.deepin.daemon.ACL /org/deepin/security/hierarchical/Control org.deepin.security.hierarchical.Control.SetMode boolean:false  &> /dev/null
set -e

if ! node -v &> /dev/null; then
	# 下载node包
	if ! test -e "node-${node_version}-linux-x64.tar.xz"; then
	    wget https://cdn.npmmirror.com/binaries/node/${node_version}/node-${node_version}-linux-x64.tar.xz
    fi
	# 解压安装包
	tar -xvJf node-${node_version}-linux-x64.tar.xz

	# 放到/opt目录下
	sudo rm -rf /opt/${opt_node_dir}
	sudo mv node-${node_version}-linux-x64 /opt/${opt_node_dir}

	# 创建npm、node链接到系统目录
	sudo rm -rf /usr/local/bin/npm; sudo ln -s /opt/${opt_node_dir}/bin/npm   /usr/local/bin/npm
	sudo rm -rf /usr/local/bin/node; sudo ln -s /opt/${opt_node_dir}/bin/node   /usr/local/bin/node
fi
echo "# node: $(node -v)"

if ! pnpm -v &> /dev/null; then
	# 设置淘宝镜像源
	npm config set registry https://registry.npmmirror.com

	# 安装pnpm
	npm install -g pnpm

	# 创建pnpm链接到系统目录
  sudo rm -rf /usr/local/bin/pnpm; sudo ln -s /opt/${opt_node_dir}/bin/pnpm /usr/local/bin/pnpm
  sudo rm -rf /usr/local/bin/pnpx; sudo ln -s /opt/${opt_node_dir}/bin/pnpx /usr/local/bin/pnpx
fi
echo "# pnpm: $(pnpm -v)"
[[ -e "node-${node_version}-linux-x64.tar.xz" ]] && rm -rf "node-${node_version}-linux-x64.tar.xz"


# pnpm add -g pnpm
if [[ ! -e "${check_mark}" ]]; then
    pnpm add -D vitepress
    pnpm i vitepress-plugin-back-to-top
    pnpm add -D busuanzi.pure.js
    pnpm i medium-zoom
    pnpm add -D vitepress-markdown-timeline
    touch "${check_mark}"
fi