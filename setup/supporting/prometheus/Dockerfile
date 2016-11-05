# reverse engineered
#docker history -H --no-trunc  0x74696d/prometheus  | perl -p -e 's#[ \t]+# #g' | perl -p -e 's#^.*nop\) ##' | tac
#ADD file:852e9d0cb9d906535af512a89339fc70b2873a0f94defbcbe41cd44942dd6ac8 in / 4.795 MB
#/bin/sh -c apk add --update curl 2.092 MB
#/bin/sh -c export prom=prometheus-1.3.0.linux-amd64 && curl -Lso /tmp/${prom}.tar.gz https://github.com/prometheus/prometheus/releases/download/v1.3.0/${prom}.tar.gz && tar zxf /tmp/${prom}.tar.gz -C /tmp && mkdir /etc/prometheus /usr/share/prometheus && mv /tmp/${prom}/prometheus /bin/prometheus && mv /tmp/${prom}/promtool /bin/promtool && mv /tmp/${prom}/prometheus.yml /etc/prometheus/ && mv /tmp/${prom}/consoles /usr/share/prometheus/consoles && mv /tmp/${prom}/console_libraries /usr/share/prometheus/console_libraries && ln -s /usr/share/prometheus/console_libraries /usr/share/prometheus/consoles/ /etc/prometheus/ && rm /tmp/prometheus-1.3.0.linux-amd64.tar.gz 72.48 MB
#/bin/sh -c curl -Lso /tmp/consul-template_0.14.0_linux_amd64.zip https://releases.hashicorp.com/consul-template/0.14.0/consul-template_0.14.0_linux_amd64.zip && echo "7c70ea5f230a70c809333e75fdcff2f6f1e838f29cfb872e1420a63cdf7f3a78" /tmp/consul-template_0.14.0_linux_amd64.zip && unzip /tmp/consul-template_0.14.0_linux_amd64.zip && mv consul-template /bin && rm /tmp/consul-template_0.14.0_linux_amd64.zip 12.47 MB
#ENV CONTAINERPILOT_VERSION=2.4.4 0 B
#ENV CONTAINERPILOT=file:///etc/containerpilot.json 0 B
#/bin/sh -c export CONTAINERPILOT_CHECKSUM=6194ee482dae95844046266dcec2150655ef80e9 && export archive=containerpilot-${CONTAINERPILOT_VERSION}.tar.gz && curl -Lso /tmp/${archive} "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VERSION}/${archive}" && echo "${CONTAINERPILOT_CHECKSUM} /tmp/${archive}" | sha1sum -c && tar zxf /tmp/${archive} -C /usr/local/bin && rm /tmp/${archive} 20.14 MB
#COPY file:b7bbd4ffea1dde360e28804fbf0514cd9842ff4cf09508219abfc0f43561f742 in /etc 404 B
#ENV CONTAINERPILOT=file:///etc/containerpilot.json 0 B
#COPY file:93a1ee8bcf2a8b23fc3bffb7703bc11f0fc2cad01c5a61ee2cb733cdb064d31c in /etc/prometheus/prometheus.yml.ctmpl 1.182 kB
#WORKDIR /prometheus 0 B
#ENTRYPOINT [] 0 B
#CMD ["/usr/local/bin/containerpilot" "/bin/prometheus" "-config.file=/etc/prometheus/prometheus.yml" "-storage.local.path=/prometheus" "-web.console.libraries=/etc/prometheus/console_libraries" "-web.console.templates=/etc/prometheus/consoles"] 0 B

ADD file:852e9d0cb9d906535af512a89339fc70b2873a0f94defbcbe41cd44942dd6ac8  
/bin/sh -c apk add --update curl  
/bin/sh -c export prom=prometheus-1.3.0.linux-amd64 && curl -Lso /tmp/${prom}.tar.gz https://github.com/prometheus/prometheus/releases/download/v1.3.0/${prom}.tar.gz && tar zxf /tmp/${prom}.tar.gz -C /tmp && mkdir /etc/prometheus /usr/share/prometheus && mv /tmp/${prom}/prometheus /bin/prometheus && mv /tmp/${prom}/promtool /bin/promtool && mv /tmp/${prom}/prometheus.yml /etc/prometheus/ && mv /tmp/${prom}/consoles /usr/share/prometheus/consoles && mv /tmp/${prom}/console_libraries /usr/share/prometheus/console_libraries && ln -s /usr/share/prometheus/console_libraries /usr/share/prometheus/consoles/ /etc/prometheus/ && rm /tmp/prometheus-1.3.0.linux-amd64.tar.gz  
/bin/sh -c curl -Lso /tmp/consul-template_0.14.0_linux_amd64.zip https://releases.hashicorp.com/consul-template/0.14.0/consul-template_0.14.0_linux_amd64.zip && echo "7c70ea5f230a70c809333e75fdcff2f6f1e838f29cfb872e1420a63cdf7f3a78" /tmp/consul-template_0.14.0_linux_amd64.zip && unzip /tmp/consul-template_0.14.0_linux_amd64.zip && mv consul-template /bin && rm /tmp/consul-template_0.14.0_linux_amd64.zip  
ENV CONTAINERPILOT_VERSION=2.4.4   
ENV CONTAINERPILOT=file:///etc/containerpilot.json   
/bin/sh -c export CONTAINERPILOT_CHECKSUM=6194ee482dae95844046266dcec2150655ef80e9 && export archive=containerpilot-${CONTAINERPILOT_VERSION}.tar.gz && curl -Lso /tmp/${archive} "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VERSION}/${archive}" && echo "${CONTAINERPILOT_CHECKSUM} /tmp/${archive}" | sha1sum -c && tar zxf /tmp/${archive} -C /usr/local/bin && rm /tmp/${archive}  
COPY file:b7bbd4ffea1dde360e28804fbf0514cd9842ff4cf09508219abfc0f43561f742 in /etc  
ENV CONTAINERPILOT=file:///etc/containerpilot.json   
COPY file:93a1ee8bcf2a8b23fc3bffb7703bc11f0fc2cad01c5a61ee2cb733cdb064d31c in /etc/prometheus/prometheus.yml.ctmpl  
WORKDIR /prometheus   
ENTRYPOINT []   
CMD ["/usr/local/bin/containerpilot" "/bin/prometheus" "-config.file=/etc/prometheus/prometheus.yml" "-storage.local.path=/prometheus" "-web.console.libraries=/etc/prometheus/console_libraries" "-web.console.templates=/etc/prometheus/consoles"]


