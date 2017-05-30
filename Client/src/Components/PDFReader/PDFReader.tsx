import ReactPDF from 'react-pdf';
import * as React from 'react';

interface IProps {
    pdf: any;
}
export class PDF extends React.Component<IProps,any> {
   private onDocumentLoad({ total }) {
        this.setState({ total });
    }

    private onPageLoad({ pageIndex, pageNumber }) {
        this.setState({ pageIndex, pageNumber });
    }

  public  render() {
        return !this.props.pdf ? null : (
            <div>
                <ReactPDF
                    file={this.props.pdf}
                    pageIndex={2}
                    onDocumentLoad={this.onDocumentLoad}
                    onPageLoad={this.onPageLoad}
                />
                <p>Page {this.state.pageNumber} of {this.state.total}</p>
            </div>
        );
    }
}
