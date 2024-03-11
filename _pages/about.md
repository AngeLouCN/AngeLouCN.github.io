---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a final-year Ph.D. candidate of [Electrical and Computer Engineering](https://engineering.vanderbilt.edu/departments/electrical-computer-engineering/), [Vanderbilt University](https://www.vanderbilt.edu/), advised by [Prof. Jack Noble](https://www.vanderbilt.edu/vise/visepeople/jack-noble/). My research interest focuses on 2D/3D Computer Vision, Deep Learning and Medical Image Analysis.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<span class='anchor' id='news'></span>

# 🔥 News
- *2024.03*: &nbsp; I'm currently looking for 2024 **Full time position** in the field of **CV/ML/DL/Medical Image Analysis**.
- *2024.02*: &nbsp;🎉🎉 One paper "DaReNeRF: Direction-aware Representation for Dynamic Scenes" was accepted by CVPR 2024!
- *2023.10*: &nbsp;🎉🎉 Five paper accepted by SPIE Medical Imaging 2024!
- *2023.05*: &nbsp;🎉🎉 I will join [UII America](https://www.uii-ai.com/) as research intern this summer!
- *2023.04*: &nbsp;🎉🎉 Our paper "Min-Max Similarity: A Contrastive Semi-Supervised Deep Learning Network for Surgical Tools Segmentation" was accepted by IEEE Transactions on Medical Imaging (IF = 11.037)!
- *2023.01*: &nbsp;🎉🎉 Our paper "CaraNet: Context Axial Reverse Attention Network for Segmentation of Small Medical Objects" was accepted by Journal of Medical Imaging (IF = 2.4)!
- *2023.01*: &nbsp;🎉🎉 Our paper "CFPNet-M: A Light-Weight Encoder-Decoder Based Network for Multimodal Biomedical Image Real-Time Segmentation" was accepted by Journal of Medical Imaging (IF = 7.7)!
- *2022.10*: &nbsp;🎉🎉 Two paper was accepted by SPIE Medical Imaging 2024!

<span class='anchor' id='publications'></span>

# 📝 Selected Publications

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023</div><img src='images/papers/High-fidelity-hand.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
High Fidelity 3D Hand Shape Reconstruction\\ via Scalable Graph Frequency Decomposition
**Tianyu Luan**, Yuanhao Zhai, Jingjing Meng, Zhong Li, Zhang Chen, Yi Xu, and Junsong Yuan
[PDF]() [Code]() [Bibtex]() -->



<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">CVPR 2024</div><img src='images/papers/darenerfgif-lowres.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">DaReNeRF: Direction-aware Representation for Dynamic Scenes</font></font>**

  <font face="Times New Roman"><b>Ange Lou</b>, Benjamin Planche, Zhongpai Gao, Yamin Li, Tianyu Luan, Hao Ding, Terrence Chen, Jack Noble, and Ziyan Wu.</font>

  <font face="Times New Roman"><em>CVPR 2024.</em></font>

  [\[PDF\]](https://arxiv.org/abs/2403.02265) [\[Project\]]() [\[Code\]]() <!-- [\[Bibtex\]]() -->
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">SPIE 2024</div><img src='images/papers/samsnerf.gif' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">SAMSNeRF: Segment Anything Model (SAM) Guides Dynamic Surgical Scene Reconstruction by Neural Radiance Field (NeRF)</font></font>**

  <font face="Times New Roman"><b>Ange Lou</b>, Yamin Li, Xing Yao, Yike Zhang and Jack Noble. <em>SPIE Medical Imaging 2024.</em></font>

  [\[PDF\]](https://arxiv.org/ftp/arxiv/papers/2308/2308.11774.pdf) [\[Code\]]() [\[Bibtex\]]()
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">IEEE-TMI</div><img src='images/papers/min_max.jpg' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">Min-Max Similarity: A Contrastive Semi-Supervised Deep Learning Network for Surgical Tools Segmentation</font></font>**

  **<font face="Times New Roman">Ange Lou</font>**<font face="Times New Roman">, Kareem Tawfik, Xing Yao, Ziteng Liu, and Jack Noble. <em>IEEE Transactions on Medical Imaging.</em></font>

  [\[PDF\]](https://ieeexplore.ieee.org/abstract/document/10098633) [\[Code\]](https://github.com/AngeLouCN/Min_Max_Similarity) [\[Bibtex\]]()
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">AAAI 2021</div><img src='images/papers/PC-HMR.png' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' markdown="1">
  **<font size=3><font face="Times New Roman">PC-HMR: Pose Calibration for 3D Human Mesh Recovery from 2D Images/Videos</font></font>**

  **<font face="Times New Roman">Tianyu Luan*</font>**<font face="Times New Roman">, Yali Wang*, Junhao Zhang*, Zhe Wang, Zhipeng Zhou, and Yu Qiao. <em>AAAI 2021.</em></font>

  [\[PDF\]](https://ojs.aaai.org/index.php/AAAI/article/view/16326/16133) [\[Bibtex\]](https://scholar.googleusercontent.com/scholar.bib?q=info:4lzK9xf0e78J:scholar.google.com/&output=citation&scisdr=CgXmzFsbELDBw5NYnoQ:AAGBfm0AAAAAZAxehoQ9-gBUIKEdmF-1x7XFYksbph3D&scisig=AAGBfm0AAAAAZAxehrPkVkmlqPB0eHbs7uUsJZ7eHaMi&scisf=4&ct=citation&cd=-1&hl=en)
  </div>
</div>


<span class='anchor' id='teaching'></span>

# Teaching
- *21 Fall*, Teaching Assistant, Computer Vision and Image Processing (CSE 573), University at Buffalo.
- *22 Spring*, Teaching Assistant, Computer Vision and Image Processing (CSE 573), University at Buffalo.
- *22 Fall*, Teaching Assistant, Computer Vision and Image Processing (CSE 573), University at Buffalo.

<span class='anchor' id='service'></span>

# Service
- *Conference Reviews:* CVPR'23'24, ICCV'23, ECCV'24, ACM MM'24.
  
<span class='anchor' id='experiences'></span>

# 💻 Experiences
- *2024.02 - present*, Reseach Intern, [United Imaging Intelligence](https://usa.united-imaging.com/), Burlington, MA, United States. <br> Working with [Dr. Zhongpai Gao](https://sites.google.com/site/gaozhongpai) and [Dr. Ziyan Wu](http://wuziyan.com/).
- *2023.05 - 2023.08*, Reseach Intern, [United Imaging Intelligence](https://usa.united-imaging.com/), Cambridge, MA, United States. <br> Worked with [Dr. Zhongpai Gao](https://sites.google.com/site/gaozhongpai) and [Dr. Ziyan Wu](http://wuziyan.com/).
- *2022.05 - 2022.08*, Reseach Intern, [InnoPeak Technology](https://www.innopeaktech.com/), Palo Alto, CA, United States. <br> Worked with [Dr. Zhong Li](https://sites.google.com/site/lizhong19900216) and [Dr. Yi Xu](https://www.linkedin.com/in/yi-xu-42654823/).
- *2019.07 - 2021.06*, Reseach Assistant, [Chinese Academy of Sciences](https://english.cas.cn/), Shenzhen, Guangdong, China. <br> Worked with [Prof. Yali Wang](https://scholar.google.com/citations?user=hD948dkAAAAJ&hl=zh-CN) and [Prof. Yu Qiao](https://scholar.google.com/citations?user=gFtI-8QAAAAJ&hl=en).
- *2017.05 - 2019.04*, Software Engineer, [HUAWEI](https://www.huawei.com/en/), Shenzhen, Guangdong, China.

<span class='anchor' id='educations'></span>

# 📖 Educations
- *2021.08 - present*, Ph.D. candidate in Computer Science, [University at Buffalo](https://www.buffalo.edu/), Buffalo, NY, United States
- *2014.09 - 2017.06*, M.Eng. in Electronical Engineering, [Tsinghua University](https://www.tsinghua.edu.cn/en/), Beijing, China
- *2009.08 - 2013.07*, B.S. in Applied Physics, [University of Science and Technology of China](https://en.ustc.edu.cn/), Hefei, Anhui, China
