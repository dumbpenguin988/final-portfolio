import NavBar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import "./Portfolio-page.css"
import wastenet_fig1 from "../images/wastenet-fig1.png"
import wastenet_fig2 from "../images/wastenet-fig2.png"
import wastenet_fig3 from "../images/wastenet-fig3.png"
import wastenet_fig4 from "../images/wastenet-fig4.png"
import wastenet_fig5 from "../images/wastenet-fig5.png"
import wastenet_fig6 from "../images/wastenet-fig6.png"
import wastenet_fig7 from "../images/wastenet-fig7.png"

function WasteNet() {

  return (
    <div className="wrapper">
      <NavBar/>
      <div className="portfolio-page" id="wastenet">
        <section>
          <div className="titles">
            <div>
              <div className="title-img">
              </div>
              <div className="title-text">
                <h1>WasteNet</h1>
                <h2>
                Automating waste classification with deep neural network.
                </h2>
                <h4>
                  By: The Vastum Photographers
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>1. Introduction</h2>
          <p>
          With accelerating development in manufacturing and E-commerce, our society is now faced with an ever-growing amount of waste, much of which goes abandoned without being recycled and reused. This leads to tremendous loss of resources and even more hostile conditions for our environment, causing pollution in water, air, and soil. To solve the problem of recycling, classification becomes essential. However, the current process of waste classification is largely led by human force, and its practical enforcement has proven inefficient. Waste classification is a very promising but not yet widely industrialized application of deep learning. Therefore, deep learning comes into the picture as a potential help: using computer vision to automate the classification process will be a very promising application of neural networks for making this irksome but essential issue approachable.
  For our project, we draw inspiration from various network architectures including DenseNet, SparseNet, and Multipath-DenseNet, and proposed a new model, WasteNet, which has improved performance compared to the state-of-the-art convolutional neural networks.
          </p>
        </section>
          <h2>2. Methodology</h2>
          <h3>2.1 Dataset</h3>
          <p>We experimented with two datasets, one with 25,077 images in 2 classes (organic and recyclable), 
            the other with 2,557 images in 6 classes (trash, cardboard, glass, metal, paper, and plastic). 
            Both datasets are publicly accessible, respectively at <a href="https://www.kaggle.com/techsash/waste-classification-data">https://www.kaggle.com/techsash/waste-classification-data</a> and <a href="https://github.com/garythung/trashnet">https://github.com/garythung/trashnet</a>. 
            We resized all images to 224 * 224. Below is a chart showing the distribution of the data. </p>
          <div className="img-container">
            <img src={wastenet_fig1} alt="" className="img-fluid"></img>
          </div>
          <h3>2.2 Models</h3>
          <p> For our project, we first experimented with two existing structures - DenseNet and SparseNet. Compared to traditional convolutional networks with L connections between L layers, DenseNet (Densely Connected Convolutional Network) connects each layer to every other layer, generating L(L-1)/2 connections for L layers. Whereas DenseNet has compelling advantages such as alleviating the vanishing-gradient problem, its excessive connections decrease the computation-efficiency and increase the possibility of overfitting. Thus, Liu and Zeng proposed SparseNet, which significantly reduced the number of parameters by only retaining each layer’s connections to its the farthest and nearest layers. 
  We also studied Multipath-DenseNet, another structure built upon DenseNet. This structure combines the benefits of the depth and width of networks by lining up DenseBlocks in parallel. In each WideDenseBlock, the results from parallel DenseBlocks are concatenated.</p>
          <div className="img-container">
            <img src={wastenet_fig2} alt="" className="img-fluid"></img>
          </div>
          <p> Fusing insights from all three architectures, we proposed our own neural network model, WasteNet. The key to this architecture is the WasteBlock that has Sparse blocks lined up in parallel so that the network can be both wide and parameter efficient. </p>
          <div className="img-container">
            <img src={wastenet_fig3} alt="" className="wasteblock"></img>
          </div>
          <p>
          We proposed two variants of this model, WasteNetA and WasteNetB. In WasteNetA, outputs of individual SpareBlocks inside the WasteBlock are concatenated together, whereas WasteNetB’s outputs are added before passing to the next layer. Our experiments have shown that both models can achieve similar results in our tasks. In terms of the general WasteNet architecture, the input first goes through convolution and pooling operations, then a transition layer, and lastly the classification layer.
          </p>
          <div className="img-container">
            <img src={wastenet_fig4} alt="" className="img-fluid"></img>
          </div>
          <p>
          The following table details what we believe to be the best set of hyperparameters for each model and the given dataset:
          </p>
          <div className="img-container">
            <img src={wastenet_fig5} alt="" className="img-fluid"></img>
          </div>
          <p>Note: “growth rate” controls how fast feature maps increase, “# of layers” is a list of the number of layers in each WasteBlock, “width” is the number of SpareBlocks in parallel in each WasteBlock, and “# of paths” is how many layers that each layer connects to in a single SpareBlock.</p>
        <section>
          <h2>3. Results</h2>
          <p>For both datasets, we have experimented with various existing architectures and our new models. The tables below exhibit the optimal result for each model.</p>
          <div className="img-container">
            <img src={wastenet_fig6} alt="" className="img-fluid"></img>
            <img src={wastenet_fig7} alt="" className="img-fluid"></img>
          </div>
        </section>

        <section>
          <h2>4. Challenges and Reflection</h2>
          <p>
          Waste classification is a typical application of computer vision which can impact society in a positive way. With a number of researches already been done in this field, the challenges of this project come from multiple aspects:
          </p>
          <ol>
            <li>It is difficult to find suitable datasets to train our model. There are not many datasets of trash images available, and the two datasets we found and used are either way too small, 2532 images, (Dataset 2) or only have two categories (Dataset 1).</li>
            <li>Searching for ideas to improve upon state-of-the-art architectures like DenseNet is challenging for us. We had to read through many research papers to gather inspirations and finalized design decisions by trial and error.</li>
            <li>Fine-tuning hyperparameters turned out to be extremely time consuming. We divided the training tasks among the group and used Google Colab and Kaggle platforms to train multiple networks simultaneously.</li>
            <li>We encountered overfitting when training on the smaller dataset that only has a few hundred images in each category. We tried to resolve it with various methods, including data augmentation, resizing model (reducing parameters), dropout, and other regularizations.</li>
            <li>As second-year computer science students who have only completed the very minimal introductory courses, we often found ourselves lacking sufficient knowledge while implementing the model. Although we have considered a few more ways to accommodate our architecture to Dataset 2 with 2532 images, it was challenging for us to achieve that given the limited time constraints.</li>
          </ol>
          <p>
          Despite the challenges, we have achieved satisfactory results for the project. Our model, WasteNet has accomplished our target goals on the 2-class dataset by achieving around 92% accuracy with reasonable runtime, which performs better than DenseNet121, ResNet50 and SparseNet do. On the 6-class dataset, we encountered the issue of overfitting and only reached the base goal of around 70% accuracy with reasonable runtime. In this case, WasteNet is still able to slightly outperform the existing architectures by a few percentage points. It is also worth mentioning that both of our WasteNets have only around one million parameters. In contrast, DenseNet121 has over seven million parameters and ResNet50 23 millions. 
          </p>
          <p>  Future works could include the construction of a sufficient dataset with more photographs of actual waste, as a vital cause of the overfitting issue stems from the lack of data. Besides, pretraining our model on larger image datasets like ImageNet may help further boost the model’s performance. Moreover, as we are limited by the availability of GPUs during the training process, spending more time on tuning the hyperparameters and testing on various architectures would also boost the model performance.</p>
          <p>  Overall, we appreciate this hands-on experience of applying convolutional neural networks to a real-world problem. First and foremost, we have gained a deep understanding of three different architectures for image recognition through implementation - DenseNet, SparseNet, Multi-path DenseNet - and their corresponding characteristics. Moreover, we have learned to combine different ideas together to solve new problems, and also experienced the full process of developing a new architecture in deep learning. </p>
        </section>

        <section>
          <h3>References</h3>
          <p>Bilal Lodhi, Jaewoo Kang, Multipath-DenseNet: A Supervised ensemble architecture of densely connected convolutional networks, Information Sciences, Volume 482, 2019, Pages 63-72, ISSN 0020-0255, https://doi.org/10.1016/j.ins.2019.01.012.</p>
          <p>C. Bircanoğlu, M. Atay, F. Beşer, Ö. Genç and M. A. Kızrak, "RecycleNet: Intelligent Waste Sorting Using Deep Neural Networks," 2018 Innovations in Intelligent Systems and Applications (INISTA), Thessaloniki, 2018, pp. 1-7, doi: 10.1109/INISTA.2018.8466276.</p>
          <p>G. Huang, Z. Liu, L. Van Der Maaten and K. Q. Weinberger, "Densely Connected Convolutional Networks," 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, HI, 2017, pp. 2261-2269, doi: 10.1109/CVPR.2017.243.</p>
          <p>Liu, W. and Zeng, K., “SparseNet: A Sparse DenseNet for Image Classification”, <i>arXiv e-prints</i>, 2018.</p>
          <p>M. Yang and G. Thung, “Classification of trash for recyclability status,”arXiv preprint, 2016.</p>
          <p>Pablo Ruiz, http://www.pabloruizruiz10.com/resources/CNNs/DenseNets.pdf</p>
        </section>
      </div>
      <Footer/>
    </div>
    )
}

export default WasteNet;